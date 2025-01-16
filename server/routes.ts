
import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Simple static file serving is all we need
  const httpServer = createServer(app);
  return httpServer;
}
