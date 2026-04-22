# Physio Therapy

## Docker

Build and run the production container locally:

```bash
colima start
docker-compose up --build -d
```

The frontend is served as static files by `nginx` and is exposed on `http://localhost:4001`.

Stop it with:

```bash
docker-compose down
```
