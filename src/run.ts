import { ConcentratedLiquidityPool } from "./concentrated-liquidity-pool";
import { Range } from "./common.types";

async function runSimulation() {
  console.log("Starting DeFi simulation...");

  const pool = new ConcentratedLiquidityPool({ initialPrice: 1, feeRate: 0.003 });
  const position = pool.enterPosition({ range: [0.5, 1.5] as Range, liquidity: 1000 });
  
  console.log(`Position created with ID: ${position.id}`);

  const xReceived = pool.sellY(100);
  console.log(`X tokens received for selling 100 Y: ${xReceived}`);

  const xPaid = pool.buyY(50);
  console.log(`X tokens paid to buy 50 Y: ${xPaid}`);

  console.log("Simulation complete.");
}

runSimulation().catch(console.error);

