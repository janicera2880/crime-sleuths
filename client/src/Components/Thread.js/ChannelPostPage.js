import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostForm from "../PostForm";
import PostCard from "../PostCard";

/*This component displays information about a specific channel,
including its name, description, posts
It also allows the user to add a new posts*/