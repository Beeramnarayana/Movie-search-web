#include<bits/stdc++.h>
using namespace std;
void solve(vector<vector<pair<int,int>>>&graph,int src,int n){
     vector<int>dist(n,INT_MAX);
     vector<bool>visited(n,false);
     priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>>q;
     q.push({0,src});
     dist[src]=0;
     while(!q.empty()){
          auto a=q.top();
          q.pop();
          visited[a.second]=true;
          for(int i=0;i<graph[a.second].size();i++){
                if(visited[graph[a.second][i].second]==false && dist[graph[a.second][i].second]>a.first+graph[a.second][i].first){  
                dist[graph[a.second][i].second]=a.first+graph[a.second][i].first;
                q.push({a.first+graph[a.second][i].first,graph[a.second][i].second});
                }
          }                     
     }          
     for(int i=0;i<n;i++)
     cout<<dist[i]<<" ";        
}     
int main(){
    int n=6;
    vector<vector<pair<int,int>>>graph{
     {{4,1},{4,2}},
     {{4,0},{2,2}},
     {{4,0},{2,2},{3,3},{1,4}},
     {{3,2},{2,5}},
     {{1,2},{3,5}},
     {{6,2},{2,3},{3,4}}
    };
    solve(graph,1,n);
    return 0;
}