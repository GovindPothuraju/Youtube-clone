import React from "react";

const Comments = [
  {
    name: "Govind Pothuraju",
    text: "This tutorial is awesome! Really clear explanations.",
    replies: [],
  },
  {
    name: "Neha Sharma",
    text: "I tried this code and it worked perfectly. Thanks!",
    replies: [
      {
        name: "Govind Pothuraju",
        text: "Glad it worked, Neha! Keep experimenting.",
        replies: [],
      },
      {
        name: "Rohit Verma",
        text: "I am stuck at line 23, can someone help?",
        replies: [
          {
            name: "Neha Sharma",
            text: "Check your variable names, I had the same issue before.",
            replies: [
              {
                name: "Rohit Verma",
                text: "Oh yes, that solved it. Thanks a lot!",
                replies: [],
              },
              {
                name: "Govind Pothuraju",
                text: "Always remember JS is case-sensitive!",
                replies: [
                  {
                    name: "Rohit Verma",
                    text: "Noted, bro 😁",
                    replies: [],
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
    name: "Anjali Kapoor",
    text: "Could you make a video on this topic too?",
    replies: [
      {
        name: "Govind Pothuraju",
        text: "Yes, planning to do that soon!",
        replies: [],
      },
    ],
  },
  {
    name: "Saurabh Jain",
    text: "Awesome content, keep posting!",
    replies: [],
  },
  {
    name: "Priya Singh",
    text: "I loved the examples, very practical.",
    replies: [
      {
        name: "Govind Pothuraju",
        text: "Thanks Priya! More examples coming soon.",
        replies: [],
      },
    ],
  },
  {
    name: "Karan Mehta",
    text: "Can someone explain the nested replies part?",
    replies: [
      {
        name: "Neha Sharma",
        text: "Basically, replies can have replies of their own.",
        replies: [
          {
            name: "Karan Mehta",
            text: "Ah, got it now. Thanks!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shreya Das",
    text: "This helped me a lot with my project. Much appreciated!",
    replies: [
      {
        name: "Govind Pothuraju",
        text: "Glad to hear that, Shreya!",
        replies: [],
      },
      {
        name: "Neha Sharma",
        text: "Happy to help anytime.",
        replies: [],
      },
    ],
  },
  {
    name: "Rahul Gupta",
    text: "How do you handle errors in this code?",
    replies: [
      {
        name: "Govind Pothuraju",
        text: "Try using try-catch blocks and proper logging.",
        replies: [
          {
            name: "Rahul Gupta",
            text: "Thanks, I will try that.",
            replies: [],
          },
          {
            name: "Neha Sharma",
            text: "Also check for undefined variables, that helped me.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Megha Verma",
    text: "I really enjoy your teaching style!",
    replies: [
      {
        name: "Govind Pothuraju",
        text: "Thank you Megha! Means a lot.",
        replies: [],
      },
    ],
  },
  {
    name: "Ankit Roy",
    text: "Could you make a PDF version of this tutorial?",
    replies: [
      {
        name: "Govind Pothuraju",
        text: "Yes, working on it. Should be ready soon!",
        replies: [],
      },
    ],
  },
];


const CommentContainer = ()=>{
  return (
    <div className="m-5 p-2 w-8/12">
      <h1 className="text-2xl font-bold">Comments: </h1>
      {Comments.map((comment,index)=>(
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
}

const Comment = ({data})=>{
  const {name, text,replies} = data;
  return (
    <div>
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className="h-8 mx-2"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
      {/**Recursive part */}
      {replies && replies.length > 0 && (
        <div className="pl-5 border border-l-black ml-5">
          {replies.map((replay,index)=>(
            <Comment key={index} data={replay} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CommentContainer;