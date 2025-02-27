import type { Prisma } from "@prisma/client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
type CommentListProps = {
  comments: Prisma.CommentGetPayload<{
    include: {
      auther: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>[];
};
const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="space-y-8">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={comment.auther.imageUrl as string} />
            <AvatarFallback>{comment.auther.name}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="mb-2">
              <span className="font-medium text-foreground">
                {comment.auther.name}
              </span>
              <span className="text-sm text-muted-foreground ml-2">
                {comment.createdAt.toDateString()}
              </span>
            </div>
            <p className="text-muted-foreground">{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;