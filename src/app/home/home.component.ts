import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas = [
    {
    "id":41,
    "config_name":"Description character limit",
    "config_key":"max_description_length",
    "config_value":"140",
    "config_multi_value":null,
    "description":"Maximum number of characters for description",
    "config_field_type":"integer",
    "config_max_digits":3,
    "min_value":0,
    "max_value":0,
    "entity":"Abum",
    "start_date":"2021-01-01",
    "thru_date":null,
    "referenceId":null,
    "group":null,
    "is_published":true,
    "createdBy":"system",
    "updatedBy":"system",
    "tenantId":1,
    "usertypeId":2,
    "screenId":8,
    "statusId":2,
    "usertype":{
       "id":2,
       "user_type":"registered"
    },
    "screen":{
       "id":8
    },
    "status":{
       "id":2,
       "status_text":"Published"
    },
    "createdAt":"2021-03-19T17:14:13.000Z",
    "updatedAt":"2021-03-19T17:14:13.000Z"
  },
  {
    "id":8,
    "config_name":"Audio oreview duration",
    "config_key":"audio_preview_duration",
    "config_value":"5",
    "config_multi_value":null,
    "description":"Audio preview duration for album - registered user",
    "config_field_type":"integer",
    "config_max_digits":2,
    "min_value":0,
    "max_value":0,
    "entity":"Album",
    "start_date":"2021-01-01",
    "thru_date":null,
    "referenceId":null,
    "group":null,
    "is_published":true,
    "createdBy":"system",
    "updatedBy":"system",
    "tenantId":1,
    "usertypeId":2,
    "screenId":8,
    "statusId":2,
    "usertype":{
       "id":2,
       "user_type":"registered"
    },
    "screen":{
       "id":8
    },
    "status":{
       "id":2,
       "status_text":"Published"
    },
    "createdAt":"2021-03-19T17:14:13.000Z",
    "updatedAt":"2021-03-19T17:14:13.000Z"
  },
  {
    "id":35,
    "config_name":"Display private / public flag on album creation",
    "config_key":"display_private_public",
    "config_value":"Y",
    "config_multi_value":null,
    "description":"Display pubic private option when creating an album",
    "config_field_type":"",
    "config_max_digits":null,
    "min_value":0,
    "max_value":0,
    "entity":"Album",
    "start_date":"2021-01-01",
    "thru_date":null,
    "referenceId":null,
    "group":null,
    "is_published":true,
    "createdBy":"system",
    "updatedBy":"system",
    "tenantId":1,
    "usertypeId":2,
    "screenId":8,
    "statusId":2,
    "usertype":{
       "id":2,
       "user_type":"registered"
    },
    "screen":{
       "id":8
    },
    "status":{
       "id":2,
       "status_text":"Published"
    },
    "createdAt":"2021-03-19T17:14:13.000Z",
    "updatedAt":"2021-03-19T17:14:13.000Z"
  },
  {
    "id":33,
    "config_name":"Invite others to add to album?",
    "config_key":"invite_peers_groups_to_add_to_album",
    "config_value":"Y",
    "config_multi_value":null,
    "description":"Should be able to invite peers and peer groups to add t allbum",
    "config_field_type":"",
    "config_max_digits":null,
    "min_value":0,
    "max_value":0,
    "entity":"Album",
    "start_date":"2021-01-01",
    "thru_date":null,
    "referenceId":null,
    "group":null,
    "is_published":true,
    "createdBy":"system",
    "updatedBy":"system",
    "tenantId":1,
    "usertypeId":2,
    "screenId":8,
    "statusId":2,
    "usertype":{
       "id":2,
       "user_type":"registered"
    },
    "screen":{
       "id":8
    },
    "status":{
       "id":2,
       "status_text":"Published"
    },
    "createdAt":"2021-03-19T17:14:13.000Z",
    "updatedAt":"2021-03-19T17:14:13.000Z"
  },
  {
    "id":12,
    "config_name":"Video preview duration",
    "config_key":"video_preview_duration",
    "config_value":"5",
    "config_multi_value":null,
    "description":"Video preview duration for album - registered user",
    "config_field_type":"integer",
    "config_max_digits":2,
    "min_value":0,
    "max_value":0,
    "entity":"Album",
    "start_date":"2021-01-01",
    "thru_date":null,
    "referenceId":null,
    "group":null,
    "is_published":true,
    "createdBy":"system",
    "updatedBy":"system",
    "tenantId":1,
    "usertypeId":2,
    "screenId":8,
    "statusId":2,
    "usertype":{
       "id":2,
       "user_type":"registered"
    },
    "screen":{
       "id":8
    },
    "status":{
       "id":2,
       "status_text":"Published"
    },
    "createdAt":"2021-03-19T17:14:13.000Z",
    "updatedAt":"2021-03-19T17:14:13.000Z"
  },
  {
    "id":31,
    "config_name":"Max number of peers in peer group",
    "config_key":"max_group_strength",
    "config_value":"10",
    "config_multi_value":null,
    "description":"Max Number of peers in a group",
    "config_field_type":"integer",
    "config_max_digits":3,
    "min_value":0,
    "max_value":0,
    "entity":"Peer Group",
    "start_date":"2021-01-01",
    "thru_date":null,
    "referenceId":null,
    "group":null,
    "is_published":true,
    "createdBy":"system",
    "updatedBy":"system",
    "tenantId":1,
    "usertypeId":2,
    "screenId":13,
    "statusId":2,
    "usertype":{
       "id":2,
       "user_type":"registered"
    },
    "screen":{
       "id":13
    },
    "status":{
       "id":2,
       "status_text":"Published"
    },
    "createdAt":"2021-03-19T17:14:13.000Z",
    "updatedAt":"2021-03-19T17:14:13.000Z"
  }];

  tableHeader = ["Id", "Config Name", "Config Value", "Start Date", "Thru Date", "Status", ""];

  userData = new Array(this.datas.length).fill(1);

  constructor() { }

  ngOnInit(): void {
  }

  btnHandler(val: any) {
    let num = this.userData[val] + 1;
    this.userData[val] = num;
    console.log(this.userData);
  }

  counter(index: number) {
    const num = this.userData[index];
    return Array(num);
  }

}
