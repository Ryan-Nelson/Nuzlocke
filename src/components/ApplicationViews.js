import React, { Component } from "react"
import { Route } from "react-router-dom"

//////news////////////
import NewsManager from "../modules/NewsManager"
import NewsList from './news/NewsList'
import NewsDetail from './news/NewsDetail'
import NewsForm from './news/NewsForm';
import NewsEditForm from './news/NewsEditForm';
///////chats/////////
import ChatList from './chat/ChatList'
import ChatForm from './chat/ChatForm'
import ChatFormEdit from './chat/ChatFormEdit'
import ChatManager from '../modules/ChatManager'
/////task///////
import TaskList from "./task/TaskList"
import taskManager from "../modules/taskManager"
import TaskAddForm from "./task/taskAddForm";
import TaskEditForm from "./task/taskEditForm"

import MovieList from "./movies/MovieList"
import MovieForm from "./movies/MovieForm"
import MovieManager from "../modules/MovieManager"
import MovieEditForm from "./movies/MovieEditForm"

class ApplicationViews extends Component {
    state = {
        news: [],
        tasks: [],
        chats: [],
        users: [],
        movies: [],
        leadActor: [],
        yearReleased: [],
        id: [],
        userId: [],
        dateofEntry: [],

    }
    aUserId = this.props.activeUserId()
    
////// news //////
    removeNews = (id) =>
        NewsManager.delete(id)
            .then(NewsManager.getAll)
            .then(news => this.setState({ news: news }))

    removeNews = (id) =>
        NewsManager.delete(id)
            .then(NewsManager.getAll)
            .then(news => this.setState({ news: news }))

    addNews = News => {
        return NewsManager.addNews(News)
            .then(() => NewsManager.getAll())
            .then(news =>
                this.setState({
                    news: news
                })
            )
    }

    updateNews = News => {
        return NewsManager.updateNews(News)
            .then(() => NewsManager.getAll())
            .then(news =>
                this.setState({
                    news: news
                })
            )
    }
    
    getAllNewsAgain = () =>
        NewsManager.getAll().then(news => this.setState({ news: news }))

///////////chat/////////////
    addChat = (chat) => {
        return ChatManager.addChat(chat)
            .then(() => ChatManager.getAll())
            .then(chats => this.setState({
                chats: chats
            })
            )
    }

    updateChat = (chat) => {
        return ChatManager.updateChat(chat)
            .then(() => ChatManager.getAll())
            .then(chats => this.setState({
                chats: chats
            })
            )
    }
    deleteChatMessage = (id) => {
        fetch(`http://localhost:8088/chats/${id}`, {
            "method": "DELETE"
        })
            .then(() => fetch("http://localhost:8088/chats?_expand=user"))
            .then(r => r.json())
            .then(chats => this.setState({ chats: chats }))
    }

    /////////task/////////
    addTask = task => {
        return taskManager.addTask(task)
            .then(() => {
                return taskManager.getAll(this.aUserId)

            })
            .then(tasks =>
                this.setState({
                    tasks: tasks
                }))
    }
    getTaskToEdit = (id) => {
        return taskManager.get(id)
            .then(task =>
                this.setState({
                    task: task
                })
            )
    }
    editUpdatedTask = (task) => {
        // console.log("task: ", task)
        return taskManager.updateTask(task)
            .then(() => {
                return taskManager.getAll(this.aUserId)
            })
            .then(tasks =>
                this.setState({
                    tasks: tasks
                }))
    }
//////////movies/////////////
addMovie = movie =>
    MovieManager.post(movie)
      .then(() => MovieManager.getAll())
      .then(movies =>
        this.setState({
          movies: movies
        })
      );

  deleteMovie = (id) => {
    return MovieManager.removeAndList(id)
      .then(movies => this.setState({
        movies: movies
      })
      )
  }

  getAllMoviesAgain = () => {
    fetch("http://localhost:8088/Movies")
      .then(r => r.json())
      .then(movies => this.setState({ movies: movies }))
  }

  updateMovie = (editedMovieObject) => {
    return MovieManager.put(editedMovieObject)
      .then(() => MovieManager.getAll())
      .then(movies => {
        this.setState({
          movies: movies
        })
      });
  };

  getMovieToEdit = (id) => {
    return MovieManager.get(id).then(movie => this.setState({
      movie: movie
    }))
  }

  editMovie = (movie) => {
    return MovieManager.updateMovie(movie).then(() => {
      return MovieManager.getAll()
    }).then(movies => this.setState(
      {
        movies: movies
      }
    ))
  }


    componentDidUpdate() {
    }

    componentDidMount() {
        const newState = {}

        NewsManager.getAll()
            .then(news => newState.news = news)
            .then(() => this.setState(newState))
            .then(taskManager.getAll(this.aUserId))
            .then((tasks) => newState.tasks = tasks)
            .then(() => ChatManager.getAll())
            .then(chats => newState.chats = chats)
               
    }
    
    render() {
        console.log(this.props.activeUser)
        return (
            <React.Fragment>
                {/* news */}
                <Route exact path="/news" render={(props) => {
                    return <NewsList news={this.state.news}
                        removeNews={this.removeNews}
                        loadNews={this.getAllNewsAgain}
                        {...props}
                    />
                }} />
                <Route exact path="/news/:newsId(\d+)" render={(props) => {
                    return <NewsDetail
                        {...props}
                        removeNews={this.removeNews}
                        news={this.state.news} />
                }} />
                <Route path="/news/:newsId(\d+)/edit" render={props => {
                    return <NewsEditForm
                        {...props}
                        updateNews={this.updateNews} />
                }}
                />
                <Route path="/news/new" render={(props) => {
                    return <NewsForm {...props}
                        addNews={this.addNews}
                    />
                }} />
                {/* chats */}
                <Route path="/chats" render={(props) => {
                    return <React.Fragment>
                        <ChatList {...props}
                            chats={this.state.chats}
                            users={this.state.users}
                            deleteChatMessage={this.deleteChatMessage} />
                        <ChatForm {...props}
                            chats={this.state.chats}
                            addChat={this.addChat} />
                    </React.Fragment>
                }} />
                <Route path="/chats/:chatId(\d+)/edit" render={props => {

                    return <ChatFormEdit {...props}
                        chats={this.state.chats}
                        updateChat={this.updateChat} />

                }} />
                {/* tasks */}
                <Route exact path="/tasks" render={(props) => {
                    return <TaskList
                        tasks={this.state.tasks}
                        {...props} />
                }} />
                <Route exact path="/tasks/form" render={(props) => {
                    return <TaskAddForm
                        tasks={this.state.tasks}
                        addTask={this.addTask}
                        {...props} />
                }} />
                <Route exact path="/tasks/editForm/:taskId(\d+)" render={(props) => {
                    return <TaskEditForm
                        task={this.state.task}
                        getTaskToEdit={this.getTaskToEdit}
                        editUpdatedTask={this.editUpdatedTask}
                        {...props} />
                }} />
                <Route exact path="/movies" render={(props) => {
                    return <MovieList
                      {...props}
                      movies={this.state.movies}
                      deleteMovie={this.deleteMovie}
                      loadMovies={this.getAllMovies}
                      name={this.state.movieName}
                      userId={this.state.userId}
                      dateofEntry={this.state.dateofEntry}
          
                    />
          
                  }} />
                  <Route path="/movies/new" render={(props) => {
                    return <MovieForm {...props}
                      addMovie={this.addMovie}
                      movies={this.state.movies}
                      userId={this.state.userId}
                    />
                  }} />
          
                  <Route
                    path="/movies/:movieId(\d+)/edit" render={props => {
                      return <MovieEditForm {...props} movies={this.state.movies} updateMovie={this.updateMovie} getMovieToEdit={this.getMovieToEdit} edit={this.editMovie} />
                    }}
                  />
            </React.Fragment>
        )}
                }









export default ApplicationViews
