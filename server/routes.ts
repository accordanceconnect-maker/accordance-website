import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  /**
   * Client‑side routes
   * These prevent 404s when users directly open URLs that are routed on the client.
   * We simply redirect them to `/` so the SPA router can take over.
   */
  app.get(["/services", "/about", "/insights", "/contact"], (_req, res) => {
    res.redirect("/");
  });

  return httpServer;
}
