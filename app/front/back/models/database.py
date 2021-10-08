from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker

# DBの接続先 いじっちゃだめ

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

session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=ENGINE))

Base = declarative_base()
Base.query = session.query_property()
