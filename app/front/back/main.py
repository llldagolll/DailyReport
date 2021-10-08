from fastapi import FastAPI

import models.dbSchemas as md
from models.database import ENGINE
from routers import authentication, test, users

# from fastapi.templating import Jinja2Templates


# from starlette.middleware.cors import CORSMiddleware


# from routers import test, auth

app = FastAPI()

app.include_router(authentication.router, prefix="/auth")
# app.include_router(auth.router, prefix="/auth")
app.include_router(test.router, prefix="/test")
app.include_router(users.router, prefix="/users")

# md.Base.metadata.create_all(bind=ENGINE)
# clients = {}

# テスト用のtemplates指定
# templates = Jinja2Templates(directory="./templates")


# origins = [
#     "http://localhost:3000",
#     "*"
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins= origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"]
# )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
