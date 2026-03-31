import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import { execSync } from 'child_process';
import { Client } from 'pg';

let container: StartedPostgreSqlContainer;

export async function setupTestDatabase(): Promise<string> {
  container = await new PostgreSqlContainer('postgres:16')
    .withDatabase('silkroad_test')
    .withUsername('postgres')
    .withPassword('postgres')
    .start();

  const url = container.getConnectionUri();

  // Create silkroad schema manually before db push
  const client = new Client({ connectionString: url });
  await client.connect();
  await client.query('CREATE SCHEMA IF NOT EXISTS silkroad;');
  await client.end();

  // Push Prisma schema to the container
  execSync(`pnpm prisma db push --accept-data-loss --url="${url}"`, {
    env: { ...process.env, DATABASE_URL: url },
    cwd: process.cwd(),
    stdio: 'pipe',
  });

  return url;
}

export async function teardownTestDatabase() {}
