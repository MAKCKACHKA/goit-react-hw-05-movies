"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[303],{303:function(e,t,i){i.r(t);var n=i(439),r=i(791),s=i(689),a=i(87),c=i(226),o=i(184);t.default=function(){var e=(0,r.useState)([]),t=(0,n.Z)(e,2),i=t[0],l=t[1];(0,r.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTJlYjhmY2Y4MjgxZDk2MzUxZDM3NzkwYjY4NDliMyIsInN1YiI6IjY0ZTY1MWI1MDZmOTg0MDBjYTU0M2IxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jl0g1qZXpWsls6NI2whWYvOEA3R_4Z8tBb5aQwqzmWs"}}).then((function(e){return e.json()})).then((function(e){return l(e.results)})).catch((function(e){return console.error(e)}))}),[]);var h=(0,s.TH)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:c.Z.Trendig,children:"Trendig today"}),(0,o.jsx)("ul",{className:c.Z.MovieList,children:i.map((function(e){return(0,o.jsx)("li",{className:c.Z.MovieItem,children:(0,o.jsxs)(a.rU,{to:"movies/".concat(e.id),state:{from:h},children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:e.original_title,className:c.Z.MoviePoster}),(0,o.jsx)("p",{className:c.Z.MovieTitle,children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=303.2bf2e755.chunk.js.map