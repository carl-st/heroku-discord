export class WebhookPayloadDto {
  action: string;
  actor: {
    email: string;
    id: string;
  };
  created_at: string;
  id: string;
  data: {
    archived_at: string;
    buildpack_provided_description: string;
    build_stack: {
      id: string;
      name: string;
    };
    created_at: string;
    id: string;
    git_url: string;
    maintenance: false;
    name: string;
    owner: {
      email: string;
      id: string;
    };
    region: {
      id: string;
      name: string;
    };
    organization: string;
    space: string;
    released_at: string;
    repo_size: number;
    slug_size: string;
    stack: {
      id: string;
      name: string;
    };
    updated_at: string;
    web_url: string;
  };
  previous_data: any;
  published_at: string;
  resource: string;
  sequence: string;
  updated_at: string;
  version: string;
  webhook_metadata: {
    attempt: {
      id: string;
    };
    delivery: {
      id: string;
    };
    event: {
      id: string;
      include: string;
    };
    webhook: {
      id: string;
    };
  };
}
