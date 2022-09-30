import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/blogtype", "get", {
  code: 0,
  msg: "",
  "data|10-20": [
    {
      "id|+1": 1,
      name: "分类@id",
      "articleCount|0-300": 0,
      order: "@id",
    },
  ],
});

Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url);
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|10-1000": 0,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          title: "@ctitle(1, 33)",
          description: "@cparagraph(1, 18)",
          category: {
            "id|1-10": 0,
            name: "分类@id",
          },
          "scanNumber|0-100000": 0,
          "commentNumber|0-100000": 300,
          thumb: Mock.Random.image("300x250", "#888", "#fff", "Random Image"),
          // createDate: `@date('T')`,
          createDate: /166\d{10}/,
        },
      ],
    },
  });
});
