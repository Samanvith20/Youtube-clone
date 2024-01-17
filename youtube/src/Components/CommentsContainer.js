import React from "react";

const commentsData = [
    {
      id: 1,
      name: "Alice",
      text: "This is a great video!",
      replies: [
        {
          id: 101,
          name: "Bob",
          text: "Thanks, Alice! I'm glad you enjoyed it.",
        },
      ],
    },
    {
      id: 2,
      name: "Charlie",
      text: "Nice work! Keep it up.",
      replies: [
        {
          id: 201,
          name: "David",
          text: "Thank you, Charlie! I appreciate your support.",
        },
        {
          id: 202,
          name: "Eve",
          text: "I agree, fantastic content!",
        },
      ],
    },
    {
      id: 3,
      name: "Frank",
      text: "Awesome video!",
      replies: [],
    },
    {
      id: 4,
      name: "Grace",
      text: "Well done!",
      replies: [
        {
          id: 401,
          name: "Henry",
          text: "Thank you, Grace!",
        },
      ],
    },
    {
      id: 5,
      name: "Isaac",
      text: "I love your channel!",
      replies: [],
    },
    {
      id: 6,
      name: "Jack",
      text: "Keep creating amazing content!",
      replies: [],
    },
    {
      id: 7,
      name: "Kelly",
      text: "Your videos are so informative.",
      replies: [
        {
          id: 701,
          name: "Liam",
          text: "Thank you for the positive feedback, Kelly!",
        },
      ],
    },
    {
      id: 8,
      name: "Mia",
      text: "I look forward to your next upload!",
      replies: [],
    },
    {
      id: 9,
      name: "Noah",
      text: "Great job!",
      replies: [],
    },
    {
      id: 10,
      name: "Olivia",
      text: "Your content is top-notch!",
      replies: [
        {
          id: 1001,
          name: "Peter",
          text: "Thank you, Olivia! I appreciate your kind words.",
        },
      ],
    },
  ];

const Comment = ({ data }) => {
  const { name, text,  } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
    return comments.map((comment) => (
      <div key={comment.id}>
        <Comment data={comment} />
        {comment.replies && comment.replies.length > 0 && (
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies} />
          </div>
        )}
      </div>
    ));
  };

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;