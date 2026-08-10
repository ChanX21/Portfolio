---
title: "Inside Sigillum Protocol: Image Provenance on Sui"
date: "2026-08-10"
excerpt: "An architectural rundown of the image provenance protocol we built to register, trace, protect, and monetize creators' work."
tags: ["architecture", "AI", "Sui", "provenance"]
published: true
---

What if the images you create or take could be protected at source, and their provenance could still be traced even after being shared by anybody—without you ever knowing?

I thought I’d give an architectural rundown of Sigillum Protocol: an image provenance protocol on the Sui chain that we built to help content creators automatically register, earn from, trace, and protect the provenance of their creations.

We sunset the product last winter, but during its beta testnet run, we managed to reach:

- 🔍 80+ images authenticated on-chain
- 📸 100+ image verifications

> The source is available in the [Sigillum repository on GitHub](https://github.com/ChanX21/Sigillum).

## Architectural Breakdown

If I could summarize the architecture in a few words, it would be this:

> **“Probabilistic recognition, deterministic ownership, crypto economics, and verifiable decentralization.”**

<figure class="article-wide">
  <img src="/assets/writings/sigillum-architecture.png" alt="Sigillum Protocol architecture showing the web3 authentication flow and web2 verification flow" loading="lazy" />
  <figcaption>Sigillum’s authentication and verification architecture.</figcaption>
</figure>

The protocol flow basically works like this:

1. A content creator comes to the app and uploads or takes a photo to be secured.
2. We run the image through our locally deployed OpenAI CLIP ViT-B/32 Python service and get the embedding back.
3. We normalize the embedding and store it in the Qdrant vector database for searchability.
4. We do a duplication check here to counter plagiarism (similarity score greater than `0.85`).
5. Once all checks are complete, we engrave the image with creation credentials such as the creation timestamp, creator name, and Sigillum authentication tagline.
6. The engraved and original images are stored in a decentralized file-hosting service such as IPFS, while the image vector BLOB is stored in Walrus, a Sui-native decentralized cloud storage service. This is where the decentralization comes in.
7. This whole process of authentication checks and engraving is what we call **stamping the image**. That is what Sigillum stands for, by the way: it’s Latin for “the stamp of authentication.”
8. Finally, an NFT containing the corresponding provenance and storage references is created on the Sui chain. The backend sponsors and signs the mint using its service key and an on-chain `AdminCap`—a capability object in Sui Move—then transfers the resulting NFT to the creator’s wallet and soft-lists the image asset.
9. The creator can then log in to their account on the Sigillum Marketplace.
10. They can list their image for sale and earn from bids or a listing-price sale.
11. We designed the system so that as an image gains popularity and verifications from anywhere, more market signals emerge around its value. More on how that works below.

## Sigillum Verifier App

This was one of the cooler parts.

- We made a consumer-friendly image detection app available on mobile.
- Users could scan or upload literally any image—from a subway wall to a pixel-perfect digital copy—and get back image ownership and provenance results.
- The image goes through the image-similarity pipeline via the same OpenAI CLIP service for embedding and Qdrant vector database for the nearest vector.
- The verifier app then returns the most similar registered image if the similarity is greater than `0.85`.

The logic was simple: people could take out their phones and snap the picture they wanted to verify or buy, whether it was on a wall, at a subway station, in a book, or anywhere else.

The more eyeballs and verifications the picture gets, the more signals exist around the image and its marketplace value.

In essence, once it’s secured on Sigillum, even if your image is circulated elsewhere, we can attempt to reconnect it to its original provenance.

## The Stack Behind the Protocol

- Contracts deployed on the Sui chain
- Backend built with Node and Express
- Decentralized storage with IPFS and Walrus
- AI image analysis with OpenAI CLIP
- Qdrant as the vector database and MongoDB as the NoSQL database
- Decentralized vector storage with Walrus for AI datasets and images

## The Architectural Decisions We Made, in Short

### Why Soft Listing?

This is primarily a consequence of Sui’s owned-object model and the contract API, not a fundamental limitation of Move.

Since the backend owns the minting `AdminCap`, it can mint a `PhotoNFT`, but `register_photo` immediately transfers that NFT to the creator:

```move
transfer::transfer(photo_nft, owner);
```

Once transferred, the backend cannot consume or escrow that user-owned object in a later transaction.

A real listing requires passing the NFT by value:

```move
convert_to_real_listing<T>(..., nft: T, ...)
```

Only the wallet controlling that NFT can authorize this transaction. Hence the flow decision.

Soft listing basically separates **discoverability from custody**.

Technically, the contracts could have been redesigned to mint directly into the marketplace in one transaction. But that would either require the backend to decide that the asset is for sale or require a more tightly coupled mint-and-list transaction.

### Why OpenAI CLIP Instead of a File Hash?

A SHA-256 hash only recognizes identical bytes. Resizing, compression, screenshots, cropping, or metadata changes produce a completely different hash.

CLIP embeddings offer fuzzy recognition across transformed or visually similar images.

The architecture is effectively:

- Cryptographic content identifiers for exact storage identity
- CLIP embeddings for perceptual discovery
- Sui records for ownership and provenance

A `0.85` CLIP similarity score is a similarity threshold, not an 85% certainty that two images are the same.

### Why Keep Recognition Off-Chain?

Image inference and vector search are nondeterministic, compute-heavy operations. Putting them on-chain would increase cost and still not make the model’s judgment objectively true.

Sigillum instead puts only the deterministic result layer on Sui:

- NFT ownership
- Listing state
- Escrow
- Settlement
- Administrative verification score
- Provenance events

This is a strong architectural boundary.

The way I like to think of it is:

> **“AI proposes the match, the blockchain preserves the history!”**

### Why Backend-Sponsored Minting?

The backend holds the NFT `AdminCap` and service wallet. This provides:

- Controlled admission into the verified collection
- One minting policy
- A simpler creator experience
- Prevention of arbitrary callers minting “Sigillum authenticated” NFTs

The tradeoff is centralization: Sigillum decides what enters the collection and must secure its key and capability.

So this was not a fully decentralized architecture—recognition and admission had a service-controlled layer, while ownership, custody, and marketplace settlement moved on-chain.

Thanks to my great teammates for making this work through countless iterations.

One of the best products I’ve made, and definitely one I’m proud of.
