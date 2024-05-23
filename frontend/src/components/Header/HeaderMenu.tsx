import { Badge, Box, IconButton, Tooltip } from "@mui/material";
import TooltipStyled from "../shared/TooltipStyled";
import ProfileMenu from "./ProfileMenu";
import mailIcon from "../../../public/icons/mail.svg";
import notificationIcon from "../../../public/icons/bell.svg";
import Image from "next/image";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "22px",
      }}
    >
      <TooltipStyled title="Chat">
        <IconButton>
          <Badge badgeContent={4} color="error">
            <Image
              style={{ width: "32px", height: "32px" }}
              src={mailIcon}
              alt="Profile"
            />
          </Badge>
        </IconButton>
      </TooltipStyled>
      <TooltipStyled title="Notifications">
        <Link href={`/notifications/`}>
          <IconButton>
            <Badge badgeContent={999} color="error">
              <Image
                style={{ width: "32px", height: "32px" }}
                src={notificationIcon}
                alt="Profile"
              />
            </Badge>
          </IconButton>
        </Link>
      </TooltipStyled>
      <ProfileMenu />
    </Box>
  );
}
