import styled from "styled-components";
import colors from '../../../styles/colors';

export const BigButton = styled.button`
    width: 392px;
    height: 357px;

    background: ${colors.white_100};
    box-shadow: 0px 0px 12.92px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    border: none;
    transition: .3s;

    font-weight: 600;
    font-size: 40px;
    line-height: 54px;
    color: ${colors.black_100};

    :hover {
        transform: scale(1.1, 1.1);
    }
`

export const BigbuttonLayout = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
    row-gap: 79px;
`

// -------------여기까지 공통별•직종별 큰 버튼---------------

export const Smallbutton = styled.button`
    width: 338px;
    height: 251px;
    
    background: ${colors.white_100};
    box-shadow: 0px 0px 11.1402px rgba(0, 0, 0, 0.1);
    border-radius: 17.2449px;
    
    font-weight: 700;
    font-size: 45px;
    line-height: 55px;
    color: ${colors.black_100};

    font-family: 'Gotham';
    transition: .3s;
    border: none;

    :hover {
        transform: scale(1.1, 1.1);
    }
`

export const SmallButtonLayout = styled.div`

`

// -------------여기까지 직종별(FE, BE, UxUi, PM 등) 작은 버튼---------------

export const StartButtonLayout = styled.button`
    width: 315px;
    height: 73px;

    background: ${colors.white_100};
    box-shadow: 0px 0px 12.9193px rgba(0, 0, 0, 0.1);
    border-radius: 76px;

    color: ${colors.black_100};
    font-weight: 800;
    font-size: 25.8385px;
    line-height: 35px;
    letter-spacing: 0.05em;
    transition: .3s;

    border: none;

    :hover {
        transform: scale(1.1, 1.1);
    }
`

// -------------여기까지 시작하기 버튼---------------