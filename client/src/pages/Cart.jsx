import React from 'react'
import styled from 'styled-components';
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;
const Section = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  gap: 28px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  padding: 12px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 1.2;
  }
`;
const Table = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 30px;
  ${({ head }) => head && `margin-bottom: 22px`}
`;
const TableItem = styled.div`
  ${({ flex }) => flex && `flex: 1; `}
  ${({ bold }) =>
    bold &&
    `font-weight: 600; 
  font-size: 18px;`}
`;
const Counter = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text_secondary + 40};
  border-radius: 8px;
  padding: 4px 12px;
`;

const Product = styled.div`
  display: flex;
  gap: 16px;
`;
const Img = styled.img`
  height: 80px;
`;
const Details = styled.div``;
const Protitle = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 500;
`;
const ProDesc = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ProSize = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 0.8;
  }
`;
const Subtotal = styled.div`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
const Delivery = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const Cart = () => {
  return (
    <Container>
      <Section>
        <Title>Your Shopping Cart</Title>
        <Wrapper>
          <Left>
            <Table>
                  <TableItem bold flex>
                    Product
                  </TableItem>
                  <TableItem bold>Price</TableItem>
                  <TableItem bold>Quantity</TableItem>
                  <TableItem bold>Subtotal</TableItem>
                  <TableItem></TableItem>
                </Table>
                <Table>
                  <TableItem flex>
                    <Product>
                      <Img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUQEBAVFRUVFRUVFRgVFRUVFhcXFRUWFhUWFhUYHSggGBslHRUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0lICUtLS0rKy0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUHBgj/xABBEAABAwIDBQUEBwYFBQAAAAABAAIRAyEEEjEFQVFhcQYTIoGRBzKhsSNCUnLB0fAUYoKSouEzQ7LC8WNzk8PS/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAiEQEBAAIDAQEAAgMBAAAAAAAAAQIRAyExQRJRYRMjkSL/2gAMAwEAAhEDEQA/AOmEppSJQKAEphRKaUAJQlIoIEimohAUEVldoNv0MGwPrEkukNa0S5xGutgOZQabiAJJgDiqbtq4bNk7+nm4Z2z81ybtN2txWM8Ibko76bHe8NZqOB8QtoIGusLzzK7nASS1hNwHFp/hdP5K0xHdNobcw9EAuqAkmAGEOdMTpNupQwm3KD4uWE2GcQOXiEtk8JXCDi6NFxyvc6ZBDvEORM38uhHK3sHtfVDu6qGWGQ0uvH7pO8HS/LzizSZp35BYfZHa4xFGJuyB5GYHlBHkFtkqCzQpSmkoSiD0k2UUDkU0IygKKbKUoCkm5kkFtAolAoGlNciU1yBpKCRShAkQgkgK4l7Y9t5sYKFMuBosa182GZ30gy79HCePz7auLe1vZbn7RblHv4djib3hz2/JoTweEobQLbj3hoeHkmVajqhkb9YaQPTRalHs5ULgCLcR810vs1sKiym0ZBmGpI38VTPl1GvHxfquTUNjYh5gUnHyt6qejsDEA2pOcJiwOu5fQdHZ7I8LRKjZs3KbAarO8tjWcGN+vG9icJisPVbNI+PwuBsMjiDnHTL8wukFSV6ILaVS0tzNtaxB16EfFRlbRzZegkkkpQSIQSQORTZRCB0IQlKUoAkkkgtlAolNKAJjk9MKAIIlBAkkoSQELxPtEYxr8NVI8UVWTy8B/P4r2wXg9qtzse/aBpupio4NY4FtSJiadRhzZiN3kqZ5ajbh47ndz4g2VgxUIEW1t+atbY2tSwLO8ewvi0C1zYX4k/oKpsrZLKNZzGlwDfda8zDHAeGN0EG+uvFP7dbGFTBvcyxaaZdfRnetL9dAJLvJc0kuXbq7xx6YFb2suFm4MRGvekHzAaVZ2V7RqmIJa2hlLRmPjkBg955OUWbqVzivsqsx8ASQYBXu/Zt2A/aRVq4ppDC11Klu8bhDn+Qt5ngui442Of8A243tHT9reKEtp4enlJkh7iZ4XEQV6Lsd7QqmKxAw2Iw4plzS5rmFxuAHAFp3EGZnhxXmOz3YJ/e16GJAD6YcGxo4kHI8HeCII/MK/wCzrYDxjW1nsJbTpudJ0D3ZWsEHfBeR91WmvIzzn2+usQjCCKszAoIoIAigkgckShKRQKUkEkF0oJISgRTCiSgUAShJFAEEUkCWVjNn0s/eVGAgSQSJDSdSeHGePDfqpKuWO4vhncLuOc7Y2jTp4rOKgfbI4tIPBwk8QHAL0mGxIe21wR81zvt+wYfGOfHgqVHZrWDnMY6epl5WvsPb9MNEGW2gb+EQufLD7HXhybvbcp9lqTjIIpt5EgAcmzlHoszbnaV2CLKLcTSNNrQ1rabTMaAvcDaeAB3lT7YacYWUadSGta57zfLqA0EAjNo63JYm020qALHY2kHTBa7DlzY4a/OVbH+17bf6et7LYsYrDd/VLKjw8y1zQ40r2b4pkEXkQJJ4L0lKm1oytaGgbmgAegXN+zGenUcPCe9NFrXU5AcC7M45TpDW/FdJlbYuLku6eCimApSrMzkEJSlAkEU0lA5JNlGUCSQlJBcSKCBKBFBJAoCimylKAyhKbKBKB0rN7Qbco4Oi6vWJgWDRGZzoJDWz0J6Aq+XDUlcN7d7dftDEinRP0c93RGgMuGaofvR6Ac1K2OO3oq9dm1aD6r6WQVDLROYtLPA0h0C/h4byFz6vRrYR+Vx8M2PIadCur7H2S2hSbRbcNEE/aP1nX4mT5qrtnZDHiHNmf15rlnJrK/w67xfrGfy8psTtaWZnPA0FnRuiIjgFU7QbZw9es2pkywIIBmesyqm3NgimQWuibAfOxWQ3BBrvGTHKy2mWF7YZTknVdO7AinWxIqtcfBTzZT9UxkGXiLu9Oa6PmXD+zO03UKra7BYOu0b2WBb6fG67Bs7atDENzUagdGo0c37zTcLSxTPCzutHMlmUOZLMoUTZksyhlGUE2ZAlRyiCgfKSaigKCSSC5KEpspIDKBKBQQGUpQJWPtXtLhMO4sq1gHgTkaC53mGi3nCJkt8bErP2vtrD4ZuavUDZ0bq933Wi566Lwe2u39Z8twze6b9p0OqHyu1vx6heOxWIc4l73FzjqXEucTukm6tMWuPDb69B2v8AaBVqsdRot7qmQQ4m9RzTaCdGzpAk8147sxiA7GUCbQ8W/LzVTasnwj7zuu4eSbs1rWVqbnzkDmuJGoAcCSOYUWfF9WXU8d6rUyy4VXFPZF9Vv0KDHsF5sL8RxlUcRs0u8LTZcWWN26cMunj6eyqdR7qjmk8JXi+1OHax0usJMDfbVdibs5rRlF1xT2g1g7GVGMcHNZlba4BA8Y65iZ9NyvxTtTmykjOwm03yGw2Oi2MLi3tdnpOcx7DEtJBHpqDwXmsNTMyt9rCH5ho4Qeu4rsxZ8e7O3tNi9vqoAGJp5xpmbDX9cvuu/pXttm7VoYhuajUDo1Gjm/eabhcYzQ6Do6467wrWFxL6bxUpuLXN0I1/uOSXFGXFL47UCjK8hsjtxRcA3Eg0373NBcw84ElvTTmvT4PGUqozUqjXji0gxyPA9VSue42erMpwTAngoqcimykgdKSbKSC1KUoShKBybKUoIPPdu9unCYVz2GKjz3dPk5wJLvIAnrC5CHxM9SdSTvJO8r0ftjx2bE0aA/y6ReetR35Ux6rx9Sp4mCdZJ/Xmr4urimsV5tQFNFzO4adeKhoNOitARZWaqtSlvVbEUoAP6g2WmQoarLIOkeyfb/e0jgqjvHSEsP2qU2/lmOmVe8FEBfP2ycc7CYiliRMMcM0b2mzvgSu29otuNw2DqYoeI5R3Y3Oe+Azykz0BWHJh2r48L7Se25oOdg8I76SIq1B/lz9Rn7/E7t19OYYPDF3iO/8ARVhuFc95fUJc5xLnE6kkySfMrQptDbQr4YaRMbbvI2jhQFahJJaLmvYCIP6KLTxScYQugLjCsbP2rVwtQVqZ0s4aAj7LuR+Bus7E1LtHmeg/QRw1fMIdv+SF7d4pPDgHDQgEdCJCevOdg8XnwjGzJpE0/IXZ/SQPJeiWVcNmro5JBJECkgkgsoSkUEBSQSQcF9ouILtp17+6WMHLLTYCPWVh0qpLmneB+p9Fb7WV+8xuJeBE16kfwuLZ84nzWVMdD+oUyujG6jcw+IarIcsqg8ACFbp1JWjdcBUVckXTS5/1cp6yoziqg96kfK6Bn7U3KQ8TG7kt/bfaMVcFhKIvllz76ZAabR65/KF5t76TjPuu4OFj13JADNqI42jyUeo+rlB2YaQpg1QHEMFs4HRFlVu4ypSnSUZqqN+IQS1myCFTGIkT9YAhw3cPnHqhUxKz8Q85pB1kW5i6ioyuu1iu8mANTb1N/hHqUqb7wN34fgoGOJsB71hGuXgOEqd4DQWjX653AfZHNRKrK6D7L8f9LUpfbYHebD+Tj6Lo8rinYbH9ziadR9mZi0nhnBbflJHou0qMvWHNP/R0oympKrI6Uk1JBaQSJSlAlT2ztFuGoVcQ/SmwujiR7repMDzVuVzr2ybTLaNLDNP+I4vf92nGUebjP8CJk3XK8RUdUcajruc5xdzc4lx+agcU8Hco6hSt8vEuGq7lo0nrGp6jqrrHwYV8atxZ7nbVbWThVedAsxuKG9OqY4tENKncabjQqvIEvc1vlJ9FUpskE5Guk7xB9VVoNLpqPMgaczuU5x0CBZRsl2nplmndQVI/k0hZjtoO368UWbRdpqE/UR+8Vx1RQVKqaMQDoq9UwYU7TsX1VADJSchT1us7dsMsra06BIEjU2AG89eAT2U2AS73R6udy4qGm/j0trH2RwClzyZMchuA4BaN5F3AudnbVcBDC1zWajwkETx0XdKNUPa17TIcA4HiHCR81wuhU3LqXYLaHeYfuifFROX+AyWfiP4VGUY82PW3pkUEVRzgkkkgnlBJBAQFxX2mbWbicQcnu0R3YPGHOzO6TpyAO9dkxeJbSY+q+crGl7oBJhokwBrovnvaeMp1K1SoymWUnucWt1LWkyAfXy03KY14vWYSonlTVmAaGVCBJgKDO/FvAYcuBdFgQCeBIJaPPKfRR1RlmdV6AbHqUNnHFVA5ve16TaYNpYKdV2eNbmI5X3rzlO5kqfi08knp1OnAzO03c0qNIvKtMwxfcmyvUqIaLKZi0mCDEUrNY3r5qocK7gVptpOLp+rberJc0b1bS9m2IcA7goHUCDGkr0ZgqriMMHWIUfmK3CMV+HcNylpua8ZXWcND+BU5a9lnDM3ioMXTBIc3f81GlLjrz/iGrSLTBCjBur+HfIyP8io69LKCo0i4b7hUyrDSp+0eyXYTEPw5JIEFhP1muEg/MdQVRYCbASVaVrjlLF6m5et7AbR7vEtYTaoCw9dWH1EfxLyDcOQJJE8MwHxVzYdYMr0nucIbVpuMe74XgyTw6qaZdzTu8pSgEis3EMpIJILCCCSCttLG0qNMvq1WUxBAL3BomDAE6nkvnpjZF4j1/sup+2BpOFpfRuMVsxcB4WDI4eLhJcI6evJ8OM2psrYujh8Cqwbrjn+HBVhRcTDWlatRsiFNhKLYv6BT+WmXHK9x2roVDsKh3xl7DRJMh1pcxtxr4XALmeHp5hAFwupdk9mjFbLxOFFpqvDSZIDstOow8hMLnWIwNTDuyPY5lQatcI8ufI6FRJ2zwmsqqtZUbpKu0qjspc6w0vvPJJmPcfCGjNzRweycbi35aVJ7yNYHhHCXe63fqdynemu9eN7YnZrG4qj3+GpiowPLS0VKYfIgk5XEWv8A2VvE9gdpgZhhSTEwKlInzbnn0Wp2U7C7ToHM7G08LmglomsT1aCGz0cuj4LCGnl77HVKhi4DGMBMkC1yLAWk6+lLyLTtw7aOwcfRh2Iw1Sk06OLfD0LhYHqVUq4hjBDjJX0ccTSce7DC4EQ7PcEHcQbLn3aT2VYau8vwrzhnk+47x0j0AOZnxHIKJy7VtscndtRg0aqVfFB5uIHLdzXRB7HsX7ratJ7omBnA9Yn0Cqv9km0iYzYYbv8AEef/AFq1vW1MrfHPnMcLzI4i6lFXO0tOoFvLcuh4T2N4o/42LoM+4H1D6ENXq9g+yTA0TmrvdiHc/o2fyNM+riqfuRTHHJ4Tt7tGjjKze4b/AIYLDU+2JBAH7oOaD+8d1zg08Aftkfd/Fdo7QdgsE9h/ZQKFUDwxPdujc5u77w+Oi5Pimmm51OoMrmktcDqCFfHLHLxtMJIzKuAIuMruoJPqXJgaDYENcLwG6kfevCuVcQInnA+ZWdiqg0PMg7/VWpZI+gcFVLqbHnVzGOPUtBPzUqzOzLnnCYc1JzGjTmdfcGq0lRxDKSCSCdEJqIQF7QQWuAIIggiQQdQRvC4R2v2BUwWKc0M+iquc6gRcFpcDkA1luYD04ru6y9v7MZVaKmQGpSl1M7xMZ2jqBHWFFuu18LrKOY7H7D42u3OQ2m3/AKjiHfytBPrCuYjsFiaLHPY5lXKCXNaXBxAucoNnHlZe+2NiLQDqAtzDtaTB3rPDmyyrt5J+Z08X7MiP2V5B1rvn+SnqNxS9pmFpHBurPbL6RZkO/wAb2tLTyMz1AK9Ph8HTpZxTaBmqPe6N7nG5POw9F4v2u13DCU6bdH1hmPJrXGPWD5LXbi3vLbmD8TRi4ceVvmva+z7bVMtfh3V+5aajXAEAuc4sLS4OOtmtEX1XPm0gnhWuNymnVjct7d4fSw0k1cZXeP8Au06Q/oYDHmp9l7S2dSf9DL3gH3q1SsROsZ3EN8lz3sv2pZ9Hh6uGbUqZrOhrs51GZrt/Ne+oY7H1LU8NTps0+keykI+63MfIhc9lnTXe2rV233lhSLRxMNH8xhGhVygl3ha2SXE/Gd5WXiqrwCH1GED6ou0nhpovP47aIY0vqVsrBp4srSRwA58Fl2nqN3bvap7Gxhi5jyHBrnNJMMHic2xA8ZaPFGh1hV9h9o67qrxiXkh12GAI3lpItpuuRAmJgeOG28LXbUccRTa4e7nzNc4OBmJ4OAMRxBsTLa+3cI05GVqepdLQ4wDMDOWjzAsDprA7b+f8Ovrj3f8ALv46c3adM6OlNdtkAxK51R2mx/uVmuPJ4J9FOK79SVw6rtmWL3GJ2wwe8R03+i5f7RnNe9mJaILvA/y9wnnEjyC1czid5/NYnbOm5uHl7SJe0NJBudYnpKvxyzLanJnNPHVMUdB+pWj2e2YcVXpUNznieTGyah9AfNZ+Ewb3nwsc87mtaXH0C972C7LY2niaeLqNFJjcwLXyHuDmEWZFrke9Gi6nLllfa6eBFhoigioYEkhKSCwimhOCApISlKDz76JoViB7rpc3/c3yJ9CFtUKpgGLj8NVX2tQz0yR7zPE3yFx5iR6JmBrA74FvjouXOfjLp38Wczw7+NGqbyN8H1/4K8P7WqQODY6YLa7COcseCB6z5L19StlcAAS06OgACRvkzE20/NQ7S2HTxjDTrNzMFxcgh+5wcNCAfiV0YZbjks/OT54lPYV0va3szc2ThqwMG7Ko04eNo/BeG2xsDE4cnvqLmAH3vep/ziw6GFrK3xzl+qjKO8GIvMxHQrQbt/HRlbiqhaLEmCfUiSsfK/d/ZJ9Z41UXV9ibYu1NpYgTOJqmf33fC9vJZ1au9xlznE8XEk+pTHVSd6GZVuvilylKUp5LY2f2ZxlYSzDPji+GDqC6J8l6jZvs5Jg4isBxbSH+93/yo0pcpHgaTA4hu82FpknQQNV132f9nO5od7iAe9qf5VRpmmwHwnK62Z2p3gZea3ex/ZHD0agdQoeIf5jpcR/EdPKFr7Swnd1iM0yA7+aSp0zuW1anRY33WgdAB8kzG4SnWYadZjXsOrXCRbRTJKFUWAwdKiwU6LGsYNA0QL69SrIKYE4KQ5FBJAkkkkFhJGEkCQSSQJeUxtR1PGU6QByBj3kfVc0loZPHKS4L1azNt4Jz8tRkSyc06lpF46G8b4WfJjuNeLLWXfjV2ZTFUtv4dXcuS3jSboABwi0ei8z2cxJFMuMXOg5ABehbVztkFTxY6x2nny3loytQBvlk6ECzoPDisXGilDKZPil+ckeTQQtLFBxtJWZ4A8ms0kn6wuOrmnetGLzeN7GYGqcxwzJ403Fk8ZDCPiqY7A7PBn9nceTn1CP9V/Ne0fhGm7IcP3TlPoqzmgXl1txQedPZzBi37HQ/8bD+ClwuyqFIzToU2Hi1jWn1AWq65JLlESOqBhItxT2TuCa0SfCFZLcovqgtYZ8EAvJdNgPdHUn8Fc2o6i9udjSKjSA+by0zDp3wRErMoDLc6lXsIM4e3flc5vG0OI/pHoeKChCapSE0hQAiEEQgckkkgSCSSC4AjCdCUII0E8hNhAQE4BABPAQZlCj3XgGkkjodPy8loYXFlhnUb1Xxggg/q3/KVOTbQ8DvSJt23g9rxIVbEYUFUMPUe0y3zafwV6niWu0MO4FWQy62FLTLbKGpVebO+P5rXrPBs4Rz3KliKJibHgoFBzdGjqUWYfN+rJ7MO87pm5T+6ebE24BAhlbZtyowb8Spm4Up4ptG9BCBxRpvLTLTBvB6iE5zxuEqo6rdBaaZAPEf8oEKVjbDoEHNUCFJPLUIQJJGEYQNQT4SQaEJZVI4RE2nS4m+lk9lKQCJuY05EmDN9OW5BWLUMqtd0JAJ1AItxBN72FuaZTp5tDeQIj7U6Hfp8QghDU8NUzaGlzcSLXNyNJ5HjuSpU5EjWQ3SBLjA8X9kFLGUgQLHXdZRtOUQ6mY3eLNHSwKu1qQJEO1a5wkfZDjBE29036KKkDvIPkpFV2Izaeo180xzp114q/Xw7DqPRZ2IplujgeTrH1OqCdmKIs7xDik6sIMGx3LONcjdCaa0oNIVxpx16BLXR0LKDjxUjY3uQaPcE/XQ/ZeJB81VZ3e9xPRWaYZ9UerggLqLR9n1/JQtwbqhhsHqfxU72xv9FZ2c4B06+aCNuHLBkdqLFAtWjtJo7w8wD8FTIUCuWJuRWIQIQQZUsqlhIoIoST0kGjVJaxkEibm51/DUp/dj6Mfayl1zcjT5n1SSQGmwEvB3W8hNvl1hN7sZWW3tHqbpJIE1omofsXbygk+d73TfdY1zbEm56GR8QEkkBcwd6WxYNIH8Wv8AqKrN1KSSkF5UZaCDKSSkY+LaATHFV0klASsUWDgkkgvUaTeAUr2gCwHoEkkAARosGYWQSQam1Bdn3B8yqBSSUAJFFJA0oFJJA1JJJB//2Q=='/>
                      <Details>
                        <Protitle>Product Title</Protitle>
                        <ProDesc>Men formal shirts - PURPLE</ProDesc>
                        <ProSize>Size: XL</ProSize>
                      </Details>
                    </Product>
                  </TableItem>
                  <TableItem >$120</TableItem>
                  <TableItem >
                    <Counter><div>-</div>2<div>+</div></Counter>
                  </TableItem>
                  <TableItem >$240</TableItem>
                  <TableItem></TableItem>
                </Table>
          </Left>
          <Right>
            <Subtotal>SubTotal : 120.90</Subtotal>
            <Delivery>Delivery Details:
              <div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <TextInput small placeholder="First Name" />
                  <TextInput small placeholder="Last Name" />
                </div>
                  <TextInput small placeholder="Email Address" />
                  <TextInput small placeholder="Phone no. +91 XXXXX XXXXX" />
                  <TextInput small textArea rows={5} placeholder="Complete Address (Address, State, Country, Pincode)" />
              </div>
            </Delivery>
             <Delivery>Payment Details:
              <div>
                <TextInput small placeholder="Card Number" />
                <div style={{ display: "flex", gap: "6px" }}>
                  <TextInput small placeholder="Expiry Date" />
                  <TextInput small placeholder="CVV" />
                </div>
                  
                  <TextInput small placeholder="Card Holder Name" />
              </div>
            </Delivery>
            <Button text="Pace Order" small/>
          </Right>
        </Wrapper>
      </Section>
    </Container>
  )
}

export default Cart;