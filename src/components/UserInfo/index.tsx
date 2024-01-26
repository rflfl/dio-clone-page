import React from "react";

import { Container, NameText, UserPicture, Progress } from "./styled";
import { IUserInfos } from "./types";

const UserInfo = ({nome, image, percentual}: IUserInfos) => {
    return (
        <Container>
            <UserPicture src={image} />
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual} />
            </div>
        </Container>
    )
}

export { UserInfo }