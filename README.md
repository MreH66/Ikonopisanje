# Ikonopisanje — Website

Next.js website with Supabase gallery and static content from `content.json`.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase credentials
npm run dev
```

---

## Editing content

All text is in **`content.json`** in the root. Edit and save — no code changes needed:

| Key | What it controls |
|-----|-----------------|
| `site.title` / `site.tagline` | Hero section text |
| `about.name` / `about.paragraphs` | About section text |
| `about.photo` | Path to photo in `/public/images/` |
| `contact.email` / `contact.phone` | Contact section |
| `prices.items` | Price cards (add/remove/edit freely) |
| `footer.socials` | Social links in footer |

---

## Adding photos (About)

Put the photo at `public/images/about.jpg` (or any name), then update `content.json`:
```json
"about": {
  "photo": "/images/your-photo.jpg"
}
```

---

## Supabase setup

### 1. Create project at supabase.com

### 2. Create the `icons` table

```sql
create table icons (
  id          bigint generated always as identity primary key,
  title       text not null,
  description text,
  size        text,
  image_url   text not null,
  sort_order  int default 0,
  created_at  timestamptz default now()
);

-- Allow public read access
alter table icons enable row level security;
create policy "Public read" on icons for select using (true);
```

### 3. Create storage bucket

- Go to Storage → New bucket → name it `icons` → set to **Public**
- Upload images there
- Copy the public URL and paste into the `image_url` column of the `icons` table

### 4. Add credentials to `.env.local`

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Import on vercel.com
3. Add the two `NEXT_PUBLIC_SUPABASE_*` env vars in Vercel project settings
4. Deploy — done

---

## Adding a new icon to the gallery

In the Supabase dashboard → Table Editor → `icons` → Insert row:

| Column | Value |
|--------|-------|
| `title` | "Bogorodica sa Hristom" |
| `description` | "Tempera i zlato na dasci" |
| `size` | "30×40 cm" |
| `image_url` | paste the public Storage URL |
| `sort_order` | 1, 2, 3... (controls display order) |
