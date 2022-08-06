import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Bubble1, Bubble2, Bubble3 } from '../../styles'
import { FlexColumn, FlexRow } from '../../styles'
import { links, MENU_HEIGHT } from './config'
import { NavItem, StyledNavBar, Wrapper } from './styles'
import { NavMenuProps } from './types'

const NavMenu: React.FC<NavMenuProps> = ({
    children
}) => {
    const pathname = useLocation()

    return (
        <Wrapper>
            <Bubble1 top={"0%"} left={"35%"} />
            <Bubble2 top={"15%"} left={"5%"} />
            <Bubble3 top={"20%"} left={"45%"} />
            <StyledNavBar>
                <FlexRow>
                    {
                        links.map(({ label, href }, index) => {
                            return (
                                <NavItem key={index} $isActive={pathname.pathname === href} to={href}>
                                    {label}
                                </NavItem>
                            )
                        })
                    }
                </FlexRow>
            </StyledNavBar>
            <FlexColumn>
                <FlexRow>
                    {children}
                </FlexRow>
            </FlexColumn>
        </Wrapper>
    )
}

export default NavMenu