import React from "react";
import { green, pink } from "@mui/material/colors";
import { Avatar, Stack } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import InputBox from "../inputBox";
import Head from "next/head";

const ChatBoxScreen = () => {
  return (
    <div className="flex  w-[600px] max-md:w-full p-2 flex-col justify-center items-center">
       <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <div className="py-5 max-md:w-full">
        <div className="flex flex-col space-y-7 w-full">
          <div className="float-left max-md:flex-shrink-0">
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                <SmartToyIcon />
              </Avatar>
              <h6 className="pt-1">
                We have a best rewards program which allows users to earn money
                on each download according to file sizes and location. You can
                check our rates?
              </h6>
            </Stack>
          </div>
          <div className="float-left max-md:flex-shrink-0">
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: pink[500] }} variant="rounded">
                <AssignmentIcon />
              </Avatar>
              <h6 className="pt-1">
                We have a best rewards program which allows users to earn money
                on each download according to file sizes and location. You can
                check our rates by each download according to file sizes and
                location. You can check our rates by each download according to
                file sizes and location. You can check our rates by
              </h6>
            </Stack>
          </div>
        </div>
        <div className="fixed bottom-0 bg-white dark:bg-black left-0 right-0 h-14 w-full">
          <div className="flex flex-col fixed bottom-5 justify-center items-center left-0 right-0">
            <InputBox />
            <h6 className="mt-1">Powered by: ChatGPT</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxScreen;
