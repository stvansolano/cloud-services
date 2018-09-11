
FROM microsoft/dotnet:runtime AS dotnet-runtime-aspnet
RUN apt-get update && apt-get install -y gnupg apt-transport-https
RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && \
    mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg && \
    sh -c 'echo "deb https://packages.microsoft.com/repos/microsoft-debian-stretch-prod stretch main" > /etc/apt/sources.list.d/dotnetdev.list' && \
    apt-get update && apt-get install -y dotnet-hosting-2.0.6

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
