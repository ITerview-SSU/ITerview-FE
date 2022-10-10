import styled, {keyframes} from "styled-components";
import colors from '../../styles/colors';

const flowing = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`

export const AnimationLayout = styled.div`
    display: flex;
    flex-direction: row;
    /* row-gap: 30px; */
    background-color: ${colors.white_100};
`

export const FlowBox = styled.div`
    position: relative;
    width: 100%;
    height: 46px;
    overflow: hidden;
`

export const FlowText = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    white-space: nowrap;
`

export const TextDiv = styled.div`
    font-size: 20.003px;
    animation: ${flowing} 8s linear infinite;
    span{
        display:inline-block;
        font-family: 'Gotham';
        font-weight:600;
        padding:0 3px;
    }
`

export const ITStyle = styled.div`
    color: ${colors.pointColor_1};
    display: inline-block;
    padding:0 3px;
`

export const ITStyle2 = styled.div`
    color: ${colors.pointColor_2};
    padding-left: 3px;
    padding-right: 0px;
    display: inline-block;
`

export const TerviewStyle = styled.div`
    padding-left: 0px;
    padding-right: 3px;
    display: inline-block;
`

export const OneText = styled.div`
    padding-right: 26.66px;
`