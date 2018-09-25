 FROM microsoft/aspnetcore-build AS build

# copy csproj and restore as distinct layers
COPY ./* ./app/

WORKDIR /app
RUN dotnet restore

RUN dotnet build App.csproj -c Release -o /out

# copy everything else and build app
RUN dotnet publish -c Release -o /out

WORKDIR /out
ENV ASPNETCORE_URLS http://*:5000
EXPOSE 5000
ENTRYPOINT ["dotnet", "App.dll"]
#RUN "dotnet App.dll"
#RUN 'ls'
