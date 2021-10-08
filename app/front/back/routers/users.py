from pathlib import Path
from urllib import request

import models.schemas as schemas
from database import get_db
from fastapi import APIRouter, Depends
from models import crud, dbSchemas, schemas
from models.dbSchemas import USERSTable as users
from pydantic.main import BaseModel
from sqlalchemy import desc
from sqlalchemy.orm import Session, session

router = APIRouter()


@router.get("/get_allusers")
def get_users(db: Session = Depends(get_db)):

    return crud.getUser(db)


# @router.get('/get_allusersTodict')
# def get_usersTodict(db: Session = Depends(get_db)):
#     allusers = []
#     numberOfUsers = db.query(users).count()

#     for idx in range(numberOfUsers):
#         userId = idx+1
#         dictedUser = db.query(users).filter(users.ID==userId).first().toDict()
#         allusers.append(dictedUser)


#     return allusers


@router.post("/register")
def registe_User(user: schemas.UsersCreate, db: Session = Depends(get_db)):
    return crud.createUser(db=db, user=user)
