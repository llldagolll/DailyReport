from passlib.context import CryptContext
from sqlalchemy import desc
from sqlalchemy.orm import Session, session  # テーブルをつくったらここにモジュール追加

import models.schemas as schemas
from models.dbSchemas import USERSTable as users

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def getUser(db: Session):
    return db.query(users).all()


def get_usersTodict(db: Session):
    allusers = []
    numberOfUsers = db.query(users).count()

    for idx in range(numberOfUsers):
        userId = idx + 1
        dictedUser = db.query(users).filter(users.ID == userId).first().toDict()
        allusers.append(dictedUser)

    return allusers


def createTestUser(db: Session, user: schemas.UsersCreate):
    userInfo = users(USERNAME=user.username, EMAIL=user.email, PASSWORD=user.password)
    db.add(userInfo)
    db.commit()
    db.refresh(userInfo)

    return userInfo


def createUser(db: Session, user: schemas.UsersCreate):
    hashedUserPassword = pwd_context.encrypt(user.password)
    userInfo = users(
        USERNAME=user.username, EMAIL=user.email, PASSWORD=hashedUserPassword
    )
    db.add(userInfo)
    db.commit()
    db.refresh(userInfo)

    return userInfo


def getUserByUserName(db: Session, username: str):
    # user = db.query(users).filter(users.USERNAME == username).first()
    user = db.query(users).filter(users.USERNAME == username).first().toDict()

    return user
