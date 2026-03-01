export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  Home: { user: any };
  AddIssue: { user: any };
  Profile: { user: any };
  MyIssues: { user: any };
  WorkerHome: { worker: any };
  WorkerDashboard: { worker: any };
  WorkerComplete: { issue: any }; 
};
