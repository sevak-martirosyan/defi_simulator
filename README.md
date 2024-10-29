# DeFi Simulator tools

## Goal

This project simulates Uniswap V3 liquidity positions in different scenarios.

## Install

`npm install`
`npm start`

## Test run

`npm test`

## Uniswap V3 simulation

Concentrated liquidity works by providing a price range in which the capital provided for the position is active. At one end of the price range, the balance of a position will consist entirely of token X. At the other end of the price range, the entire balance of a position will consist of token Y. The advantage is an increased capital efficiency (i.e. a reduction in price swings for the same capital, compared to clasical AMMs).

