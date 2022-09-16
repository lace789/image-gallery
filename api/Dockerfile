FROM python:3.10.7-bullseye

WORKDIR /app

EXPOSE 5050

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
# RUN pip install -r requirements.txt
# RUN pipenv lock --requirements > requirements.txt


COPY . ./

CMD ["python", "main.py"]