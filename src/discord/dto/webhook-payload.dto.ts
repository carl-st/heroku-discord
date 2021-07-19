export class WebhookPayloadDto {
  id: string;
  data: {
    id: string;
    app: {
      id: string;
      name: string;
      web_url?: string;
    };
    git_url?: string;
    slug: {
      id: string;
      commit: string;
      commit_description: string;
    };
    user: {
      id: string;
      email: string;
    };
    stack: string;
    status: string;
    release: {
      id: string;
      version: number;
    };
    metadata: any;
    buildpacks: [
      {
        url: string;
      },
    ];
    created_at: string;
    updated_at: string;
    source_blob: {
      url: string;
      version: string;
      checksum: null;
    };
    output_stream_url: string;
  };
  actor: {
    id: string;
    email: string;
  };
  action: string;
  version: string;
  resource: string;
  sequence: null;
  created_at: string;
  updated_at: string;
  published_at: string;
  previous_data: {};
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
