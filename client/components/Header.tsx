import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Header() {
  const [auth, setAUth] = useState(false);
  return (
    <Flex
      w='100%'
      p={4}
      pl={0}
      boxShadow='sm'
      align='center'
      justify='flex-end'
    >
      {auth ? (
        <Menu>
          <MenuButton>
            <Avatar size='sm' />
          </MenuButton>
          <MenuList>
            <MenuGroup title='Profile'>
              <MenuItem>My Account</MenuItem>
              <MenuItem>Change Password</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem onClick={() => setAUth(false)}>Log out</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      ) : (
        <Button onClick={() => setAUth(true)} variant='ghost'>
          Log In
        </Button>
      )}
    </Flex>
  );
}
