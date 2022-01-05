---
date: "2018-12-23"
title: "Graph-Based Dungeon Generator: Basics"
---

In this blog post, I’ll describe an algorithm for procedural generation of 2D dungeon levels with a predefined structure. I won’t go into implementation details today as I plan to make this into a (mini) series and cover it in the next post.

## Background

The algorithm was written as a part of my [bachelor thesis](https://github.com/OndrejNepozitek/Edgar-DotNet/blob/text/bachelor_thesis.pdf) and is based on the previous work from Ma et al (2014). The goal of the thesis was to improve the speed of the algorithm and enhance it with new features. I’m quite satisfied with the result as we were able to make the algorithm fast enough to be used during game runtime. After finishing the thesis, we decided to transform it into a paper and submit it to the Game-ON 2018 conference.

## Algorithm

To produce a game level, the algorithm takes a set of polygonal building blocks and a level connectivity graph (the level topology) as an input. Nodes in the graph represent rooms, and edges define connectivities between them. The goal of the algorithm is to assign a room shape and a position to each node in the graph in a way that no two room shapes intersect and every pair of neighbouring room shapes can be connected by doors.

Through the connectivity graph, a game designer can easily affect the flow of gameplay. Do you want a single main path to a boss room with some optional side paths? Simply start with a path graph and then pick some nodes where the player can choose to either follow the main path or explore a side path with possible treasures and/or monsters waiting for him. Do you want a shortcut? Simply choose two nodes in the graph and add a shorter path that connects them. The possibilities are endless.

Not only does the algorithm allow game designers to control the high-level structure of generated layouts, it also provides ways to control the look of individual rooms and how they are connected to each other.

## Different room shapes for different rooms

I mentioned having a boos room at the end of the dungeon. But we do not want our boss room to look like every other room, right? The algorithm supports defining room shapes on a per-room basis. For example, we may have a spawn room and a boss room that should have their own sets of room shapes and then one generic set for other rooms.