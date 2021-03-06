from sqlalchemy import create_engine

# from models.users import Base
from models.dbSchemas import Base

# dbコンテナにテーブルをつくるときに back_container上のターミナルで"python -m createdatabase"とうつと
# dbコンテナにテーブルが作成される


host = "mariadb:3306"
db_name = "dailyreport-db"
user = "root"
password = "password"

# host = "host.docker.internal:3307"
# db_name = "vue_fastapi_db"
# user = "root"
# password = "myjdbroot"


DATABASE = "mariadb://%s:%s@%s/%s?charset=utf8" % (
    user,
    password,
    host,
    db_name,
)

ENGINE = create_engine(DATABASE, encoding="utf-8", echo=True)


def reset_database():
    Base.metadata.drop_all(bind=ENGINE)
    Base.metadata.create_all(bind=ENGINE)


if __name__ == "__main__":
    reset_database()
