-- Cria role e DB a partir de postgres (master user)

-- 1. Usuário de serviço
CREATE ROLE silkroad_user WITH PASSWORD '${password}' LOGIN;

-- 2. Requisito da RDS: adicionar a role ao user master
GRANT silkroad_user TO postgres;

-- 3. Cria database de serviço
CREATE DATABASE silkroad OWNER silkroad_user;

-- Cria schema de serviço para o novo DB
CREATE SCHEMA silkroad AUTHORIZATION silkroad_user;

-- Altera o search path para o usuário de serviço
ALTER ROLE silkroad_user SET search_path TO silkroad, public;

-- Condede todos os privilégios para o usuário de serviço no schema
GRANT ALL PRIVILEGES ON SCHEMA silkroad TO silkroad_user;

-- Condede todos os privilégios para o usuário de serviço nas tabelas e sequences
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA silkroad TO silkroad_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA silkroad TO silkroad_user;

ALTER DEFAULT PRIVILEGES IN SCHEMA silkroad
  GRANT ALL ON TABLES TO silkroad_user;
  
ALTER DEFAULT PRIVILEGES IN SCHEMA silkroad
  GRANT ALL ON SEQUENCES TO silkroad_user;