interface MockPost {
  id: string;
  author: {
    did: string;
    avatarSrc: string;
    name: string;
  };
  contents: { type: "text" | "image"; value: string }[];
  createdAt: string;
  publishedVia: string;
  repliesCount: number;
}

const POSTS_STREAM = [
  { id: "k00000000001", createdAt: "2025-03-11T18:00:00Z" },
  { id: "k00000000002", createdAt: "2025-03-11T17:00:00Z" },
  { id: "k00000000003", createdAt: "2025-03-11T16:00:00Z" },
  { id: "k00000000004", createdAt: "2025-03-11T15:00:00Z" },
  { id: "k00000000005", createdAt: "2025-03-11T14:00:00Z" },
  { id: "k00000000006", createdAt: "2025-03-11T13:00:00Z" },
  { id: "k00000000007", createdAt: "2025-03-11T12:00:00Z" },
  { id: "k00000000008", createdAt: "2025-03-11T11:00:00Z" },
  { id: "k00000000009", createdAt: "2025-03-11T10:00:00Z" },
  { id: "k00000000010", createdAt: "2025-03-11T09:00:00Z" },
  { id: "k00000000011", createdAt: "2025-03-11T08:00:00Z" },
  { id: "k00000000012", createdAt: "2025-03-11T07:00:00Z" },
  { id: "k00000000013", createdAt: "2025-03-11T06:00:00Z" },
  { id: "k00000000014", createdAt: "2025-03-11T05:00:00Z" },
  { id: "k00000000015", createdAt: "2025-03-11T04:00:00Z" },
  { id: "k00000000016", createdAt: "2025-03-11T03:00:00Z" },
  { id: "k00000000017", createdAt: "2025-03-11T02:00:00Z" },
  { id: "k00000000018", createdAt: "2025-03-11T01:00:00Z" },
  { id: "k00000000019", createdAt: "2025-03-11T00:00:00Z" },
];

const POSTS: MockPost[] = [
  {
    author: {
      did: "did:pkh:eip155:11155111:0x1a4b3c567890abcdeffedcba1234567890abcdef",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Man1",
      name: "User1",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/66/350/300",
      },
      {
        type: "text",
        value: "Content sample 1.",
      },
      {
        type: "image",
        value: "https://picsum.photos/id/181/350/500",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 5,
    id: "k00000000001",
    createdAt: "2025-02-28T06:26:53.092058Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x9f8e7d6c5b4a3210abcdef1234567890abcdef12",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Woman1",
      name: "User2",
    },
    contents: [
      {
        type: "text",
        value: "Content sample 2.",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 8,
    id: "k00000000002",
    createdAt: "2025-02-16T13:37:53.092079Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x4e3d2c1b0a9f87654321abcdef1234567890abcd",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Man2",
      name: "User3",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/478/300/350",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 12,
    id: "k00000000003",
    createdAt: "2025-02-28T04:38:53.092085Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x4ec7c6d4a99a7",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Woman2",
      name: "User4",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/164/200/400",
      },
      {
        type: "image",
        value: "https://picsum.photos/id/297/300/500",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 10,
    id: "k00000000004",
    createdAt: "2025-03-01T17:03:53.092091Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x9e0a08a030ed2",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Man3",
      name: "User5",
    },
    contents: [
      {
        type: "text",
        value: "Content sample 5.",
      },
      {
        type: "text",
        value: "Content sample 5.",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 11,
    id: "k00000000005",
    createdAt: "2025-02-25T02:44:53.092097Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0xfc7c08cf9097f",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Woman3",
      name: "User6",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/37/350/400",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 25,
    id: "k00000000006",
    createdAt: "2025-02-23T05:58:53.092102Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0xba2c9e8476422",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Man4",
      name: "User7",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/458/400/300",
      },
      {
        type: "text",
        value: "Content sample 7.",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 30,
    id: "k00000000007",
    createdAt: "2025-02-20T05:52:53.092108Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0xae45bf371675e",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Woman4",
      name: "User8",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/356/400/400",
      },
      {
        type: "image",
        value: "https://picsum.photos/id/5/350/400",
      },
      {
        type: "text",
        value: "Content sample 8.",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 11,
    id: "k00000000008",
    createdAt: "2025-02-14T12:06:53.092115Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x12179adb88f35a",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Man5",
      name: "User9",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/103/200/400",
      },
      {
        type: "text",
        value: "Content sample 9.",
      },
      {
        type: "image",
        value: "https://picsum.photos/id/367/300/300",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 29,
    id: "k00000000009",
    createdAt: "2025-02-28T08:04:53.092121Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x1c6875137f3323",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Woman5",
      name: "User10",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/108/200/500",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 15,
    id: "k00000000010",
    createdAt: "2025-02-08T08:43:53.092126Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0xf5433646da51f",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Man1",
      name: "User11",
    },
    contents: [
      {
        type: "text",
        value: "Content sample 11.",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 7,
    id: "k00000000011",
    createdAt: "2025-02-27T04:09:53.092151Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0xca9b13f453349",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Woman1",
      name: "User12",
    },
    contents: [
      {
        type: "text",
        value: "Content sample 12.",
      },
      {
        type: "text",
        value: "Content sample 12.",
      },
      {
        type: "text",
        value: "Content sample 12.",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 6,
    id: "k00000000012",
    createdAt: "2025-03-01T21:08:53.092160Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x20567cfc6a9c8a",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Man2",
      name: "User13",
    },
    contents: [
      {
        type: "text",
        value: "Content sample 13.",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 1,
    id: "k00000000013",
    createdAt: "2025-02-27T22:44:53.092168Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x432229ce8a2b2",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Woman2",
      name: "User14",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/6/350/500",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 2,
    id: "k00000000014",
    createdAt: "2025-02-15T13:32:53.092178Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x1daeb3e7d5e477",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Man3",
      name: "User15",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/51/400/500",
      },
      {
        type: "text",
        value: "Content sample 15.",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 5,
    id: "k00000000015",
    createdAt: "2025-03-02T09:53:53.092187Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0xb9f3130b8f3ea",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Woman3",
      name: "User16",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/164/400/500",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 5,
    id: "k00000000016",
    createdAt: "2025-02-21T20:29:53.092196Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x7dd8b0da8482f",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Man4",
      name: "User17",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/354/350/350",
      },
      {
        type: "text",
        value: "Content sample 17.",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 30,
    id: "k00000000017",
    createdAt: "2025-02-21T19:17:53.092201Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x18f334a2534a56",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Woman4",
      name: "User18",
    },
    contents: [
      {
        type: "image",
        value: "https://picsum.photos/id/87/400/450",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 14,
    id: "k00000000018",
    createdAt: "2025-02-10T07:37:53.092207Z",
  },
  {
    author: {
      did: "did:pkh:eip155:11155111:0x481b347c8cfdd",
      avatarSrc: "https://api.dicebear.com/8.x/adventurer/svg?seed=Man5",
      name: "User19",
    },
    contents: [
      {
        type: "text",
        value: "Content sample 19.",
      },
      {
        type: "image",
        value: "https://picsum.photos/id/47/250/450",
      },
      {
        type: "image",
        value: "https://picsum.photos/id/376/250/500",
      },
    ],
    publishedVia: "Antenna",
    repliesCount: 18,
    id: "k00000000019",
    createdAt: "2025-03-06T10:50:53.092212Z",
  },
];

export { POSTS, POSTS_STREAM };
