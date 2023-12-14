import React from 'react';
import styled from 'styled-components';
import logo from '../allyouneedisshop.png';
import iconCart from '../assets/icon-cart.svg';
import iconHeart from '../assets/icon-heart.svg';
import iconUser from '../assets/icon-user.svg';
import iconHamburger from '../assets/hamburger.png';
import SearchBar from './SearchBar';
import { Badge } from 'antd';


const Top = styled.div`
   display: flex;
   flex-direction: column;  // Modifica la direzione in una colonna per schermi più piccoli
   padding: 20px;  // Riduci il padding
   align-items: center;
   gap: 10px;

   @media (min-width: 768px) {
      flex-direction: row;  // Torna a una direzione di riga per schermi più grandi
      padding: 0px 104px;  // Ripristina il padding originale
   }
`;

const Center = styled.div`
   display: flex;
   flex-direction: column;  // Modifica la direzione in una colonna per schermi più piccoli
   padding: 20px 10px;  // Riduci il padding
   justify-content: space-between;
   align-items: center;

   @media (min-width: 768px) {
      flex-direction: row;  // Torna a una direzione di riga per schermi più grandi
      padding: 30px 104px;  // Ripristina il padding originale
   }
`;

const TopMenuBar = styled.div`
    display: flex;
    padding: 10px 0px;
    align-items: center;
    gap: 30px;
    flex: 1 0 0
`;


const Link = styled.a`
  color: black;
  text-decoration: none;
  text-transform: ${props => props.upperCase ? 'uppercase' : ''}
`;

const Logo = styled.img`
    display: flex;
    width: 155px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0
`;
const HR = styled.hr`
    color: rgb(255, 255, 255)
`;

const IconContainer = styled.div`
    width: 155px;
    height: 36px;
    flex-shrink: 0; 
`;

const badgeStyle = {
    postion: 'absolute',
    top: '-30px',
    left: '-13px'
}

const MenuIcon = styled.div`
  display: none;  // Nascondi il menu ad hamburger su schermi più grandi
  cursor: pointer;

  @media (max-width: 767px) {
    display: block;  // Mostra il menu ad hamburger su schermi più piccoli
  }
`;

const MobileMenu = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 80px;  // Posiziona il menù sotto l'intestazione
  right: 0;
  background-color: white;
  padding: 20px;
  z-index: 1000;
`;

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isMenuOpen: false,
        };
      }
    
      toggleMenu = () => {
        this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
      };


    render() {
        const { isMenuOpen } = this.state;

        return(
        <div>
            <Top>
                <TopMenuBar>
                    <nav>
                        <Link href="#">Chi siamo</Link> &nbsp;
                        <Link href="#">Community</Link> &nbsp;
                        <Link href="#">Brand</Link> 
                    </nav>
                </TopMenuBar>
                ITA 
            </Top>
            <HR />
            <Center>
               <Logo src={logo} alt="all you need is shop" />
               <SearchBar />
                <MenuIcon onClick={this.toggleMenu}>
                    <img src={iconHamburger} alt="Menu" style={{ maxWidth: '20%' }}/>
                </MenuIcon>
                <MobileMenu isOpen={isMenuOpen}>
                    <img src={iconUser} alt="accedi" />
                    <img src={iconHeart} alt="segna come preferito" />
                    <img src={iconCart} alt="carrello" />
                </MobileMenu>
                {isMenuOpen ? null : (  // Aggiungi questa condizione per mostrare IconContainer solo quando il menu è chiuso
                <IconContainer>
                    <img src={iconUser} alt="accedi" />
                    <img src={iconHeart} alt="segna come preferito" />
                    <img src={iconCart} alt="carrello" />
                    <Badge styles={badgeStyle} color="red" count="2" />
                    </IconContainer>
                )}
            </Center>
            <HR />
            <Top>
                <nav>
                    <Link upperCase href="#">Donna</Link> &nbsp;
                    <Link upperCase href="#">Uomo</Link> &nbsp;
                    <Link upperCase href="#">Bambini</Link> &nbsp;
                    <Link upperCase href="#">Tutti gli articoli</Link> 
                </nav>
            </Top>
            <HR />
        </div>
        )
    }

}

export default Header;