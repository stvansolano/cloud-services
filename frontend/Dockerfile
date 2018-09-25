FROM microsoft/dotnet:sdk AS build

# copy csproj and restore as distinct layers
COPY ./* ./app/
COPY ./wwwroot ./app/wwwroot/

WORKDIR /app
RUN dotnet restore

RUN dotnet build App.csproj -c Release -o /out

# copy everything else and build app
RUN dotnet publish -c Release -o /out

WORKDIR /out
ENV ASPNETCORE_URLS http://*:5001
EXPOSE 5001
ENTRYPOINT ["dotnet", "App.dll"]
#RUN "dotnet App.dll"
#RUN 'ls'
