"use client";

import { Item } from "../shared/Item";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import eventBg from "../../../public/eventBG.svg";
import { Notification } from "./mock";
import Link from "next/link";

interface NotificationSectionProps {
  notifications: Notification[];
  page?: string;
}

export default function NotificationsSection({
  notifications,
}: NotificationSectionProps) {
  return (
    <>
      {notifications.map((notification) => (
        <Item
          key={notification.id}
          sx={{
            backgroundImage: `url(${eventBg.src})`,
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            p: "10px",
            position: "relative",
          }}
          radius="12px"
        >
          <Link href={`/post/${notification.postId}`}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Box>
                  <Image
                    src={notification.img}
                    alt={notification.reaction}
                    width={28}
                    height={28}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: 600,
                      fontFamily: "Schoolbell !important",
                      textTransform: "capitalize",
                    }}
                  >
                    {notification.reaction}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                fontSize: "16px",
              }}
            >
              {notification.description}
            </Box>
          </Link>
        </Item>
      ))}
    </>
  );
}
