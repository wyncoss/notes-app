-- CreateTable
CREATE TABLE "colors" (
    "color_id" SERIAL NOT NULL,
    "hex_code" VARCHAR NOT NULL,
    "value" VARCHAR NOT NULL,

    CONSTRAINT "colors_pkey" PRIMARY KEY ("color_id")
);

-- CreateTable
CREATE TABLE "notes" (
    "note_id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "title" VARCHAR,
    "content" TEXT,
    "creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "color_id" INTEGER NOT NULL,
    "on_board" BOOLEAN NOT NULL DEFAULT false,
    "position_x" SMALLINT DEFAULT 0,
    "position_y" SMALLINT DEFAULT 0,
    "z_index" SMALLINT DEFAULT 0,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("note_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" UUID NOT NULL,
    "username" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "fk_color" FOREIGN KEY ("color_id") REFERENCES "colors"("color_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "fk_user" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

