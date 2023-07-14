import { createGlobalStyle } from 'styled-components';

export const MainStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
}

.box {
    display: flex;
    overflow: auto;
    height: 200px;
    align-items: center;

}

.main {
    margin: 0 auto;
    margin-top: 250px;
    height: 300px;
    width: 700px;
    padding: 30px;
    border: solid black 1px;
}
`