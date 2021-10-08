from models.database import DATABASE
from typing import List
from pydantic import BaseModel
from datetime import datetime
from typing import Optional

#ユーザー
class UsersBase(BaseModel):
    username: str
    email: Optional[str] = None
    


class UsersCreate(UsersBase):
    pass
    password: str

    class Config:
        orm_mode=True
