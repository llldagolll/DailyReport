import datetime

import sqlalchemy
from sqlalchemy import (Boolean, Column, DateTime, ForeignKey, Integer, String,
                        create_engine)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = sqlalchemy.ext.declarative.declarative_base()


class USERSTable(Base):
    __tablename__ = "USERS"
    ID = Column(Integer, primary_key=True, autoincrement=True)
    USERNAME = Column(String(200))
    EMAIL = Column(String(100))
    PASSWORD = Column(String(1000))
    DISABLED = Column(Boolean, default=False)
    CREATED_AT = Column(DateTime, default=datetime.datetime.now(), nullable=False)
    UPDATED_AT = Column(DateTime, default=datetime.datetime.now(), nullable=False)

    def __repr__(self):
        return f"<USERTable {self.ID} {self.PASSWORD} {self.USERNAME} {self.CREATED_AT} {self.UPDATED_AT} {self.EMAIL} {self.DISABLED}>"

    def toDict(self):
        return {
            "id": self.ID,
            "username": self.USERNAME,
            "hashed_password": self.PASSWORD,
            "created_at": self.CREATED_AT,
            "updated_at": self.UPDATED_AT,
            "email": self.EMAIL,
            "disabled": self.DISABLED,
        }
