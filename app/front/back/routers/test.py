from pathlib import Path
from urllib import request

from database import get_db
from fastapi import APIRouter, Depends, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from models import crud, dbSchemas, schemas
from passlib.context import CryptContext
# from pydantic.main import BaseModel
from sqlalchemy.orm import Session

# from routers.authentication import *

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


router = APIRouter()


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_user(username: str, db: Session = Depends(get_db)):
    user = crud.getUserByUserName(db, username)
    return user


class Scraping:
    url: str


templates = Jinja2Templates(directory="./templates")


# formのページ用意
@router.get("/{id}", response_class=HTMLResponse)
async def show_HTML(request: Request, id: str):
    return templates.TemplateResponse("index.html", {"request": request, "id": id})


# formデータの送信
@router.post("/postForm")
async def postForm(username: str = Form(...), password: str = Form(...)):
    return {"username": username, "password": password}



@router.get("/scraping")
def get_html(url: str) -> str:
    response = request.urlopen(url)
    content = response.read()
    response.close()
    html = content.decode()

    title = html.split("<title>")[1].split("</title")[0]

    return title


# @router.get('/get_allusers')
# def get_users(db: Session = Depends(get_db)):

#     return crud.getUser(db)


@router.post("/register")
def registe_User(user: schemas.UsersCreate, db: Session = Depends(get_db)):
    return crud.createUser(db=db, user=user)


@router.get("/getUserByName")
def get_userbyname(db: Session = Depends(get_db)):
    username = "Hiyori"
    return crud.getUserByUserName(db, username)


@router.get("/testAuthentication")
def test_Authencticate(username: str, db: Session = Depends(get_db)):
    user = crud.getUserByUserName(db, username)
    return user


@router.get("/testAuthenticateUser")
def test_AuthencticateUser(username: str, password: str, db: Session = Depends(get_db)):
    password = pwd_context.encrypt(password)
    # print("---------------------------------------"+password)
    user = crud.getUserByUserName(db, username)
    print("------------user:" + str(user))
    if not user:
        return False
    if not verify_password(password, user["hashed_password"]):
        return False
    return user


@router.post("/registUserWithHashedPassword")
def registe_UserHashedPassword(
    user: schemas.UsersCreate, db: Session = Depends(get_db)
):
    return crud.createUser(db=db, user=user)
