export default function Comments() {
  const commentsdata = [
    {
      id: 1,
      name: "Siddhesh chavan",
      comment: "Awsm........",
      replies: [],
    },
    {
      id: 2,
      name: "Siddhesh chavan",
      comment: "Awsm........",
      replies: [
        {
          id: 3,
          name: "Siddhesh chavan",
          comment: "Awsm........",
          replies: [
            {
              id: 61,
              name: "Siddhesh chavan",
              comment: "Awsm........",
              replies: [
                {
                  id: 52,
                  name: "Siddhesh chavan",
                  comment: "Awsm........",
                  replies: [
                    {
                      id: 53,
                      name: "Siddhesh chavan",
                      comment: "Awsm........",
                      replies: [
                        {
                          id: 63,
                          name: "Siddhesh chavan",
                          comment: "Awsm........",
                          replies: [
                            {
                              id: 64,
                              name: "Siddhesh chavan",
                              comment: "Awsm........",
                              replies: [
                                {
                                  id: 65,
                                  name: "Siddhesh chavan",
                                  comment: "Awsm........",
                                  replies: [
                                    {
                                      id: 6,
                                      name: "Siddhesh chavan",
                                      comment: "Awsm........",
                                      replies: [
                                        {
                                          id: 6,
                                          name: "Siddhesh chavan",
                                          comment: "Awsm........",
                                          replies: [
                                            {
                                              id: 6,
                                              name: "Siddhesh chavan",
                                              comment: "Awsm........",
                                              replies: [
                                                {
                                                  id: 6,
                                                  name: "Siddhesh chavan",
                                                  comment: "Awsm........",
                                                  replies: [
                                                    {
                                                      id: 6,
                                                      name: "Siddhesh chavan",
                                                      comment: "Awsm........",
                                                      replies: [
                                                        {
                                                          id: 6,
                                                          name: "Siddhesh chavan",
                                                          comment:
                                                            "Awsm........",
                                                          replies: [
                                                            {
                                                              id: 6,
                                                              name: "Siddhesh chavan",
                                                              comment:
                                                                "Awsm........",
                                                              replies: [
                                                                {
                                                                  id: 6,
                                                                  name: "Siddhesh chavan",
                                                                  comment:
                                                                    "Awsm........",
                                                                  replies: [
                                                                    {
                                                                      id: 6,
                                                                      name: "Siddhesh chavan",
                                                                      comment:
                                                                        "Awsm........",
                                                                      replies: [
                                                                        {
                                                                          id: 6,
                                                                          name: "Siddhesh chavan",
                                                                          comment:
                                                                            "Awsm........",
                                                                          replies:
                                                                            [
                                                                              {
                                                                                id: 6,
                                                                                name: "Siddhesh chavan",
                                                                                comment:
                                                                                  "Awsm........",
                                                                                replies:
                                                                                  [
                                                                                    {
                                                                                      id: 6,
                                                                                      name: "Siddhesh chavan",
                                                                                      comment:
                                                                                        "Awsm........",
                                                                                      replies:
                                                                                        [
                                                                                          {
                                                                                            id: 6,
                                                                                            name: "Siddhesh chavan",
                                                                                            comment:
                                                                                              "Awsm........",
                                                                                            replies:
                                                                                              [],
                                                                                          },
                                                                                        ],
                                                                                    },
                                                                                  ],
                                                                              },
                                                                            ],
                                                                        },
                                                                      ],
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          name: "Siddhesh chavan",
          comment: "Awsm........",
          replies: [],
        },
        {
          id: 5,
          name: "Siddhesh chavan",
          comment: "Awsm........",
          replies: [],
        },
        {
          id: 9,
          name: "Siddhesh chavan",
          comment: "Awsm........",
          replies: [
            {
              id: 10,
              name: "Siddhesh chavan",
              comment: "Awsm........",
              replies: [],
            },
            {
              id: 11,
              name: "Siddhesh chavan",
              comment: "Awsm........",
              replies: [],
            },
            {
              id: 12,
              name: "Siddhesh chavan",
              comment: "Awsm........",
              replies: [],
            },
            {
              id: 13,
              name: "Siddhesh chavan",
              comment: "Awsm........",
              replies: [],
            },
            {
              id: 14,
              name: "Siddhesh chavan",
              comment: "Awsm........",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Siddhesh chavan",
      comment: "Awsm........",
      replies: [],
    },
    {
      id: 8,
      name: "Siddhesh chavan",
      comment: "Awsm........",
      replies: [],
    },
  ];
  const Commentcomp = ({ infoo }) => {
    const { id, name, comment } = infoo;
    return (
      <div className="flex bg-slate-200 rounded-lg my-2">
        <p>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-11"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </p>
        <div>
          <p className="pl-2 font-bold">{name}</p>
          <p className="pl-2">{comment}</p>
        </div>
      </div>
    );
  };
  const Comentslist = ({ commentsdata }) => {
    return commentsdata.map((comp) => (
      <div key={comp.id}>
        <Commentcomp infoo={comp} />
        <div className="pl-8 ml-1 border border-l-black">
          {/* recursion-calling same component in itself */}
          <Comentslist commentsdata={comp.replies} />
        </div>
      </div>
    ));
  };
  return (
    <div className="ml-20 my-10">
      <h1 className="text-2xl font-bold mb-2">Comments </h1>
      <Comentslist commentsdata={commentsdata} /> <div>{}</div>
    </div>
  );
}
