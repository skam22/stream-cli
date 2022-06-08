# typed: false
# frozen_string_literal: true

# This file was generated by GoReleaser. DO NOT EDIT.
class StreamCli < Formula
  desc "Manage your Stream applications easily."
  homepage "https://github.com/GetStream/stream-cli"
  version "1.4.5"

  on_macos do
    if Hardware::CPU.intel?
      url "https://github.com/GetStream/stream-cli/releases/download/v1.4.5/stream-cli_Darwin_x86_64.tar.gz"
      sha256 "ee83caed410a422d42f1c78b1b85cc17e15c276a8a7652d439df6b56a6daf577"

      def install
        bin.install "stream-cli"
      end
    end
    if Hardware::CPU.arm?
      url "https://github.com/GetStream/stream-cli/releases/download/v1.4.5/stream-cli_Darwin_arm64.tar.gz"
      sha256 "94b4b2d36b42f411f492741b7d6ba7ee1c8431c7028569daeefb52f99012bc59"

      def install
        bin.install "stream-cli"
      end
    end
  end

  on_linux do
    if Hardware::CPU.intel?
      url "https://github.com/GetStream/stream-cli/releases/download/v1.4.5/stream-cli_Linux_x86_64.tar.gz"
      sha256 "e88c56e6dc6b246e0c55726caaa9dcafdcd0251f59a92379a9211045a0e10ed3"

      def install
        bin.install "stream-cli"
      end
    end
    if Hardware::CPU.arm? && Hardware::CPU.is_64_bit?
      url "https://github.com/GetStream/stream-cli/releases/download/v1.4.5/stream-cli_Linux_arm64.tar.gz"
      sha256 "c66a402f9ac9936a991f859d0b0a83c01a58ca54aa9efce9e43aaf57df539f8e"

      def install
        bin.install "stream-cli"
      end
    end
  end
end
