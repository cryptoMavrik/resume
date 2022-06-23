import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { FlexColumn, FlexRow } from '../../styles'
import { links } from './config'
import { NavItem, StyledNavBar, Wrapper } from './styles'
import { NavMenuProps } from './types'

const NavMenu: React.FC<NavMenuProps> = ({
    children
}) => {
    const pathname = useLocation()

    return (
        <Wrapper>
            <StyledNavBar>
                <div></div>
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
            <FlexColumn height='100%'>
                <FlexRow>
                    {children}
                </FlexRow>
            </FlexColumn>
        </Wrapper>
    )
}

export default NavMenu