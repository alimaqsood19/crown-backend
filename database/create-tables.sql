CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "collections" (
     "id" SERIAL NOT NULL,
     "title" VARCHAR(255) NOT NULL,
     "route_name" VARCHAR(255) NOT NULL,
     "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY("id")
);

CREATE TABLE IF NOT EXISTS "items" (
     "id" SERIAL NOT NULL,
     "name" VARCHAR(255) NOT NULL,
     "remaining_quantity" INT DEFAULT NULL,
     "image_url" VARCHAR(255),
     "price" NUMERIC(5, 2),
     "collection_id" INT NOT NULL,
     "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY("id"),
    CONSTRAINT "items_collection_id_fkey"
        FOREIGN KEY ("collection_id")
        REFERENCES "collections"("id")
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS "carts" (
    "id" SERIAL NOT NULL,
    "user_id" INT NOT NULL,
    "item_id" INT NOT NULL UNIQUE,
    "quantity" INT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY("id"),
     CONSTRAINT "carts_user_id_fkey"
        FOREIGN KEY ("user_id")
        REFERENCES "users" ("id")
        ON DELETE CASCADE,
    CONSTRAINT "carts_item_id_fkey"
        FOREIGN KEY ("item_id")
        REFERENCES "items" ("id")
        ON DELETE CASCADE
);

