---
published: false
---
## Promeheus Metrics

I was tasked with implementing a microservice who's objective was to return usage of our apis for our customers using our apis as well as counting specific features (e.g. number of times a rule from our rules engine was executed). Rather than reinventing the wheel and leveraging our existing metrics collection methods, I decided to use [Prometheus](https://prometheus.io) which has a time series database for events that can be queried for events that occured in a certain time period. I decided to use the [Prometheus Http API](https://prometheus.io/docs/prometheus/latest/querying/api) since it seemd very straight forward and could be easily called from my microservice. Little did I know what I was getting myself and my team into.

The first surprise I ran into was that when I queried Prometheus for a specific counter I was incrementing everytime a user made a request to another microservice (let's call it microservice B), I got back a floating point number. My first thought was "Huh? I'm incrementing by 1 everytime microservice B gets call. Why am I getting back a float?!". After some googling I found out that prometheus extrapolates values (basically doing some fancy math to approximate an answer). A good post and be read here about counters [here](https://www.robustperception.io/how-does-a-prometheus-counter-work). 

Ok, fine, I'll just round my values and treat the value as an approximation. 

