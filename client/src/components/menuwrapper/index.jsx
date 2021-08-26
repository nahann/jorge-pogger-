import React from "react";
import { Button, Image, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import style from "../../menu.module.css";

export function MenuComponent({ guilds }) {
  console.log(guilds);
  // return (
  //   <div>
  //     <img></img>
  //     {guilds.map((guild) => (
  //       <Flex>
  //         <Link to={`/dashboard/${guild.id}`}>
  //           <Button colorScheme="teal" variant="link">
  //             <Image
  //               pr={4}
  //               src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=32`}
  //               alt=""
  //             />{" "}
  //             <Text >{guild.name}</Text>
  //           </Button>
  //         </Link>
  //         <br />
  //       </Flex>
  //     ))}
  //   </div>
  // );
  return (
    <div>
      {guilds.map((guild) => (
        <Flex>
          <div className={style.server}>
            <Link to={`/dashboard/${guild.id}`}>
              <Button colorScheme="teal" variant="link">
                <Text>{guild.name}</Text>
              </Button>
            </Link>
            <img
              src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=32`}
              className={style.image}
              alt="icon"
            />
          </div>
        </Flex>
      ))}
    </div>
  );
}
